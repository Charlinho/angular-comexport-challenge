import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { concatMap, toArray, map, flatMap } from 'rxjs/operators';

import { ApiService } from '@app/core/services/api.service';

import { Planet } from '@app/core/models/planet.model';
import { Specie } from '@app/core/models/specie.model';
import { Character } from '@app/core/models/character.model';
import { CharacterResponse } from '@app/core/dtos/character.response';


@Injectable()
export class CharactersService {

  private charactersSubject = new Subject<Character[]>();
  public characters$ = this.charactersSubject.asObservable();

  private page = 1;
  private nextPage: string;
  private shouldFetchNextPage: boolean;

  constructor(private apiService: ApiService) {}

  public fetchCharacters(): void {
    this.findCharacters('people');
  }

  public fetchMoreCharacters(): void {
    if (this.canFetchMoreCharacters()) {
      this.findCharacters(`people/?page=${this.page}`);
    }
  }

  private findCharacters(uri: string): void {
    this.shouldFetchNextPage = false;

    this.apiService.get(uri)
      .pipe(
        concatMap((data: any) => {
          this.nextPage = data.next;
          return data.results;
        }),
        flatMap((characterResponse: CharacterResponse) => {
          return this.getPlanet(characterResponse.homeworld)
            .pipe(
              map((planet: Planet) => planet),
              flatMap((planet: Planet) => {
                return this.getSpecie(characterResponse.species[0])
                  .pipe(
                    map((specie: Specie) => Character.parse(characterResponse, planet, specie))
                  );
              })
            );
        }),
        toArray()
      ).subscribe((characters: Array<Character>) => {
        this.page++;
        this.shouldFetchNextPage = true;
        this.charactersSubject.next(characters);
      });
  }

  private getPlanet(uri: string): Observable<Planet> {
    return !uri ? of() : this.apiService.get(`planets/${uri.split('/')[5]}`);
  }

  private getSpecie(uri: string): Observable<Specie> {
    return !uri ? of() : this.apiService.get(`species/${uri.split('/')[5]}`);
  }

  private canFetchMoreCharacters(): boolean {
    return Boolean(this.shouldFetchNextPage && this.nextPage);
  }
}

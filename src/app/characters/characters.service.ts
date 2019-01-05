import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { concatMap, toArray, map, flatMap, take } from 'rxjs/operators';

import { ApiService } from '@app/core/services/api.service';

import { Planet } from '@app/core/models/planet.model';
import { Specie } from '@app/core/models/specie.model';
import { Character } from '@app/core/models/character.model';
import { CharacterResponse } from '@app/core/dtos/character.response';


@Injectable()
export class CharactersService {

  private charactersSubject = new BehaviorSubject<Character[]>(null);
  public characters$ = this.charactersSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public findAllCharacters(): void {
    this.apiService.get('people')
      .pipe(
        concatMap((characterResponse: Array<CharacterResponse>) => characterResponse),
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
        this.charactersSubject.next(characters);
      });
  }

  private getPlanet(uri: string): Observable<Planet> {
    return this.apiService.get(`planets/${uri.split('/')[5]}`);
  }

  private getSpecie(uri: string): Observable<Specie> {
    return this.apiService.get(`species/${uri.split('/')[5]}`);
  }
}

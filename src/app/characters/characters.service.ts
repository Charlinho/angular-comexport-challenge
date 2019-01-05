import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { concatMap, toArray, map, mergeMap, flatMap } from 'rxjs/operators';

import { ApiService } from '@app/core/services/api.service';

import { Planet } from '@app/core/models/planet.model';
import { Character } from '@app/core/models/character.model';
import { CharacterResponse } from '@app/core/dtos/character.response';


@Injectable()
export class CharactersService {

  constructor(private apiService: ApiService) {}

  public getAllCharacters(): Observable<Character> {
    this.apiService.get('people')
      .pipe(
        concatMap((character: Array<CharacterResponse>) => character),
        map((character: CharacterResponse) => character),
        flatMap((character: any) => {
          return this.getPlanet(character.homeworld)
            .pipe(
              map((planet: Planet) => {
                console.log(planet);
                console.log(character);
                return planet;
              })
            );
        }),
        toArray()
      ).subscribe((data) => console.log(data));

    return null;
  }

  private getPlanet(uri: string): Observable<Planet> {
    return this.apiService.get(`planets/${uri.split('/')[5]}`);
  }
}

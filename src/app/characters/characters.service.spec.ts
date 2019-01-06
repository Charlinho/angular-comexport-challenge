import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharactersService } from './characters.service';
import { ApiService } from '@app/core/services/api.service';

describe('Characters Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CharactersService,
        {
          provide: ApiService,
          useValue: {
            get() {
              return of({
                next: null,
                results: [
                  {
                    name: 'Luke skywalker',
                    homeworld: 'https://swapi.co/api/planets/1/',
                    species: [
                      'https://swapi.co/api/species/1/'
                    ]
                  }
                ]
              });
            }
          }
        },
      ]
    });
  });

  it('deve buscar os personagens', (done) => {
    const characterService: CharactersService = TestBed.get(CharactersService);

    characterService.characters$.subscribe((data) => {
      expect(data).not.toBeNull();
      done();
    });

    characterService.fetchCharacters();
  });
});

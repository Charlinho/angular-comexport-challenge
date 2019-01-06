import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StatisticsService } from './statistics.service';
import { ApiService } from '@app/core/services/api.service';

describe('Statistics Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StatisticsService,
        {
          provide: ApiService,
          useValue: {
            get() {
              return of({
                next: null,
                results: [
                  {
                    title: 'A New Hope',
                    episode_id: '4',
                    release_date: '1977-05-25',
                    characters: [
                      'Luke Skywalker'
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

  it('deve buscar os filmes', (done) => {
    const statisticsService: StatisticsService = TestBed.get(StatisticsService);

    statisticsService.fetchFilms().subscribe((data) => {
      expect(data.length).toEqual(1);
      done();
    });
  });
});

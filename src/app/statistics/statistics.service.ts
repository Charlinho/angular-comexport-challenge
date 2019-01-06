import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, concatMap, toArray } from 'rxjs/operators';

import { Film } from '@app/core/models/film.model';
import { ApiService } from '@app/core/services/api.service';

import { FilmResponseDto } from '@app/core/dtos/film.response';

@Injectable()
export class StatisticsService {

  constructor(private apiService: ApiService) {}

  public fetchFilms(): Observable<Film[]> {
    return this.apiService.get('films')
        .pipe(
          map((data: any) => data.results),
          concatMap((filmResponseDto: Array<FilmResponseDto>) => filmResponseDto),
          map((filmResponseDto: FilmResponseDto) => Film.parse(filmResponseDto)),
          toArray()
        );
  }
}

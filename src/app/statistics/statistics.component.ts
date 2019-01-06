import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { Film } from '@app/core/models/film.model';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'co-ex-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  public films$: Observable<Film[]>;

  constructor(private statisticsService: StatisticsService) {
    this.films$ = this.statisticsService.fetchFilms();
  }
}

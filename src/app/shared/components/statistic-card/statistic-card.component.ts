import { Component, Input } from '@angular/core';

import { Movie } from '@app/core/models/movie.model';

@Component({
  selector: 'co-ex-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})
export class StatisticCardComponent {

  @Input()
  movie: Movie;
}

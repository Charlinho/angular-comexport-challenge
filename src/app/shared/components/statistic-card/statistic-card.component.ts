import { Component, Input } from '@angular/core';

import { Film } from '@app/core/models/film.model';

@Component({
  selector: 'co-ex-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})
export class StatisticCardComponent {

  @Input()
  film: Film;

  get imgSrc() {
    return `./assets/img/${this.film.episode}.jpg`;
  }
}

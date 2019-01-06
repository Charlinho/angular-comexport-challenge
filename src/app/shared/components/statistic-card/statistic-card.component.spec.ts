import { TestBed, async } from '@angular/core/testing';
import { StatisticCardComponent } from './statistic-card.component';

describe('Statistic Card Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatisticCardComponent
      ],
    }).compileComponents();
  }));

  it('deve criar o Page Header Component', () => {
    const fixture = TestBed.createComponent(StatisticCardComponent);
    const statisticCardComponent = fixture.debugElement.componentInstance;
    expect(statisticCardComponent).toBeTruthy();
  });
});

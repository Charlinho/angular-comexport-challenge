import { Subject, of } from 'rxjs';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { StatisticsService } from './statistics.service';
import { StatisticsComponent } from './statistics.component';

import { PageHeaderModule } from '@app/shared/components/page-header/page-header.module';
import { StatisticCardModule } from '@app/shared/components/statistic-card/statistic-card.module';

let component: StatisticsComponent;
let fixture: ComponentFixture<StatisticsComponent>;

describe('Statistics Component', () => {
  const filmsSubject = new Subject<any>();
  const films$ = filmsSubject.asObservable();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PageHeaderModule,
        StatisticCardModule
      ],
      declarations: [
        StatisticsComponent
      ],
      providers: [
        {
          provide: StatisticsService,
          useValue: {
            films$,
            filmsSubject,
            fetchFilms: () => {
              return of([
                { name: 'A New Hope' },
                { name: 'Return of the Jedi' }
              ]);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('deve criar o Statistcs Component', () => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  describe('quando busca os filmes com sucesso, ', () => {
    beforeEach(() => {
      TestBed.get(StatisticsService).fetchFilms();

      fixture = TestBed.createComponent(StatisticsComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    });

    it('deve listar os filmes', (done) => {
      component.films$.subscribe((data) => {
        expect(data.length).toBeGreaterThanOrEqual(1);
        done();
      });
    });
  });
});

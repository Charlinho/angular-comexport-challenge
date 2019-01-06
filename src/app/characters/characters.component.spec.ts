import { Subject } from 'rxjs';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { CharactersComponent } from './characters.component';
import { CharactersService } from './characters.service';
import { CharacterCardComponent } from '@app/shared/components/character-card/character-card.component';

let component: CharactersComponent;
let fixture: ComponentFixture<CharactersComponent>;

describe('Characters Component', () => {
  const characterSubject = new Subject<any>();
  const characters$ = characterSubject.asObservable();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ScrollDispatchModule
      ],
      declarations: [
        CharactersComponent,
        CharacterCardComponent
      ],
      providers: [
        {
          provide: CharactersService,
          useValue: {
            characters$,
            characterSubject,
            fetchMoreCharacters: () => false,
            fetchCharacters: () => {
              characterSubject.next([{ name: 'Luke skywalker' }]);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('deve criar o Characters Component', () => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  describe('quando busca o personagem com sucesso, ', () => {
    beforeEach(() => {
      TestBed.get(CharactersService).fetchCharacters();

      fixture = TestBed.createComponent(CharactersComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    });

    it('deve ter o personagem na lista', () => {
      expect(component.characters.length).toBeGreaterThanOrEqual(1);
    });
  });
});

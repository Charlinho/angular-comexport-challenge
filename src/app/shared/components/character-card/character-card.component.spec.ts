import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterCardComponent } from './character-card.component';

describe('Character Card Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CharacterCardComponent
      ],
    }).compileComponents();
  }));

  it('deve criar o Character Card Component', () => {
    const fixture = TestBed.createComponent(CharacterCardComponent);
    const characterComponent = fixture.debugElement.componentInstance;
    expect(characterComponent).toBeTruthy();
  });
});

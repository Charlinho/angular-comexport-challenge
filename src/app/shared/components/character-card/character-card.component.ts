import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Character } from '@app/core/models/character.model';

@Component({
  selector: 'co-ex-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {

  @Input()
  character: Character;
}

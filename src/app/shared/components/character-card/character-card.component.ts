import { Component, Input } from '@angular/core';

import { Character } from '@app/core/models/character.model';

@Component({
  selector: 'co-ex-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input()
  character: Character;
}

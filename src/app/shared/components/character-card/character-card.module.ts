import { NgModule } from '@angular/core';

import { CharacterCardComponent } from './character-card.component';

@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  exports: [
    CharacterCardComponent
  ]
})
export class CharacterCardModule {}

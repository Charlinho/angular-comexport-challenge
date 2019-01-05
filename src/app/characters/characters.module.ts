import { NgModule } from '@angular/core';

import { CharactersComponent } from './characters.component';

import { CharactersService } from './characters.service';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardModule } from '@app/shared/components/character-card/character-card.module';

@NgModule({
  imports: [
    CharacterCardModule,
    CharactersRoutingModule
  ],
  providers: [
    CharactersService
  ],
  declarations: [
    CharactersComponent
  ]
})
export class CharactersModule {}

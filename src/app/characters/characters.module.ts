import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';

import { CharactersComponent } from './characters.component';

import { CharactersService } from './characters.service';

import { CharactersRoutingModule } from './characters-routing.module';
import { PageHeaderModule } from '@app/shared/components/page-header/page-header.module';
import { CharacterCardModule } from '@app/shared/components/character-card/character-card.module';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    PageHeaderModule,
    CharacterCardModule,
    ScrollDispatchModule,
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

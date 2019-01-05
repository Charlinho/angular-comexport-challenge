import { Component } from '@angular/core';

import { CharactersService } from './characters.service';

@Component({
  selector: 'co-ex-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  constructor(private charactersService: CharactersService) {
    this.charactersService.getAllCharacters();
  }
}

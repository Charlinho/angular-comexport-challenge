import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { CharactersService } from './characters.service';
import { Character } from '@app/core/models/character.model';

@Component({
  selector: 'co-ex-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters$: Observable<Character[]>;

  constructor(private charactersService: CharactersService) {
    this.charactersService.findAllCharacters();
  }

  ngOnInit(): void {
    this.characters$ = this.charactersService.characters$;
  }

  public trackByFn(index: number): number {
    return index;
  }
}

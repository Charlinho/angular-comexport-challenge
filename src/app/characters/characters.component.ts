import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { CharactersService } from './characters.service';
import { Character } from '@app/core/models/character.model';

@Component({
  selector: 'co-ex-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  @ViewChild('virtualScroll')
  viewport: CdkVirtualScrollViewport;

  public characters: Array<Character>;

  constructor(private charactersService: CharactersService) {
    this.setCharacters();
    this.charactersService.fetchCharacters();
  }

  public onScolling(): void {
    if (this.getMaximunScroll() >= 0) {
      this.charactersService.fetchMoreCharacters();
    }
  }

  public trackByFn(index: number): number {
    return index;
  }

  private setCharacters(): void {
    this.charactersService.characters$
      .subscribe((characters: Array<Character>) => {
        if (!this.characters) {
          this.characters = characters;
          return;
        }
        this.characters = this.characters.concat(characters);
      });
  }

  private getMaximunScroll(): number {
    return this.viewport.elementRef.nativeElement.scrollTop - this.viewport.getViewportSize();
  }
}

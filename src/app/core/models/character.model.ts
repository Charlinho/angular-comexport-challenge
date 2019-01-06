import { Planet } from './planet.model';
import { Specie } from './specie.model';
import { CharacterResponseDto } from '../dtos/character.response';

export class Character {
  name: string;
  height: string;
  gender: string;
  specie: string;
  homeWorld: string;
  birthYear: string;

  static parse(characterResponse: CharacterResponseDto, planet: Planet, specie: Specie): Character {
    const character = new Character();

    character.specie = specie.name;
    character.homeWorld = planet.name;
    character.name = characterResponse.name;
    character.height = characterResponse.height;
    character.gender = characterResponse.gender;
    character.birthYear = characterResponse.birth_year;

    return character;
  }
}

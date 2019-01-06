import { FilmResponseDto } from '../dtos/film.response';

export class Film {
  title: string;
  episode: number;
  amountCharacters: number;

  static parse(filmResponseDto: FilmResponseDto): Film {
    const film = new Film();

    film.title = filmResponseDto.title;
    film.episode = filmResponseDto.episode_id;
    film.amountCharacters = filmResponseDto.characters.length;

    return film;
  }
}

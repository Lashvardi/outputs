import { Component } from '@angular/core';
import { IMusic } from './interfaces/music.model';
import { GENRES } from './enums/genre.enum';

export enum COMPONENT {
  MINI_DASHBOARD,
  DASHBOARD,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'outputs';
  // შევქმნათ ცვლადი რომელიც აღნიშნავს
  // თავდაპირველ კომპონენტს რომელიც ჩანს
  component: COMPONENT = COMPONENT.MINI_DASHBOARD;

  // ENUM ის გამოყენება რომ შევძლოთ
  // საჭიროა რომ ის გავუტლოთ რაიმე
  // ცვლადს
  components = COMPONENT;


  switchToDashboard() {
    this.component = this.components.DASHBOARD;
  }

  musicList: IMusic[] = [
    {
      id: 1,
      title: 'Bohemian Rhapsody',
      album: 'A Night at the Opera',
      artist: 'Queen',
      genre: GENRES.ROCK,
    },
    {
      id: 2,
      title: 'Shape of You',
      album: '÷',
      artist: 'Ed Sheeran',
      genre: GENRES.POP,
    },
    {
      id: 3,
      title: 'Lose Yourself',
      album: '8 Mile',
      artist: 'Eminem',
      genre: GENRES.HIPHOP,
    },
    {
      id: 4,
      title: 'Take Five',
      album: 'Time Out',
      artist: 'Dave Brubeck Quartet',
      genre: GENRES.JAZZ,
    },
    {
      id: 5,
      title: 'Symphony No. 5',
      album: 'Beethoven Symphony No. 5',
      artist: 'Ludwig van Beethoven',
      genre: GENRES.CLASSICAL,
    },
    {
      id: 6,
      title: 'Cross Road Blues',
      album: 'King of the Delta Blues Singers',
      artist: 'Robert Johnson',
      genre: GENRES.BLUES,
    },
    {
      id: 7,
      title: 'Take Me Home, Country Roads',
      album: 'Poems, Prayers & Promises',
      artist: 'John Denver',
      genre: GENRES.COUNTRY,
    },
    {
      id: 8,
      title: 'Master of Puppets',
      album: 'Master of Puppets',
      artist: 'Metallica',
      genre: GENRES.METAL,
    },
  ];
}

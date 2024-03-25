import { GENRES } from "../enums/genre.enum";

export interface IMusic {
    id: number;
    title: string;
    album: string;
    artist: string;
    genre: GENRES;
}

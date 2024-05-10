import { Artist } from "./artist.interface";

export interface Track {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: string | number;
  artist?: Artist;
}

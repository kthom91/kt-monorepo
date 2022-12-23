export function ktShared(): string {
  return 'kt-shared';
}

export interface KtApiResponse {
  message: string;
}

export interface SetlistFmUser {
  userId: string;
  fullname: string;
  lastFm: string;
  mySpace: string;
  twitter: string;
  flickr: string;
  website: string;
  about: string;
  url: string;
}

export interface SetlistFmResponse {
  itemsPerPage: number;
  page: number;
  total: number;
  setlist: Setlist[];
}

export interface Setlist {
  id: string;
	eventDate: string;
	artist: Artist;
  venue: Venue;
  sets: Sets;
	url: string;
}

export interface Artist {
  name: string;
  url: string;
}

export interface Venue {
  name: string;
  city: City;
  url: string;
}

export interface City {
  name: string;
  stateCode: string;
}

export interface Sets {
  set: Set[];
}

export interface Set {
  encore: number;
  song: Song;
}

export interface Song {
  name: string;
  info: string;
}
export interface CharacterResponse {
  results: Character[];
}

export interface Character {
  id: Number;
  name: string;
  image: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  episode: string[];
  location: Location;
}

export enum AppStates {
  Active = 'active',
  Background = 'background',
  Inactive = 'inactive',
}

export interface Location {
  name: string;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}

enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknonw = 'unknown',
}

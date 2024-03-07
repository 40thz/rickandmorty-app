import { DATA_MODE, DataStatus } from '../types';

export enum CHARACTER_STATUS {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

export enum CHARACTER_GENDER {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

type Origin = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: CHARACTER_STATUS;
  species: string;
  type: string;
  gender: CHARACTER_GENDER;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterOptions = {
  name: string;
  species: string;
  type: string;
  gender: string;
  status: string;
};

export type CharacterState = {
  mode: DATA_MODE;
  options: CharacterOptions;
  data: Character[] | null;
  status: DataStatus;
};

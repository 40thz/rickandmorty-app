import { DataStatus } from '../types';

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

export enum DATA_TYPE {
  TABLE = 'Table',
  GRID = 'Grid',
}

type Origin = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: CHARACTER_STATUS.ALIVE | CHARACTER_STATUS.DEAD | CHARACTER_STATUS.UNKNOWN;
  species: string;
  type: string;
  gender:
    | CHARACTER_GENDER.FEMALE
    | CHARACTER_GENDER.GENDERLESS
    | CHARACTER_GENDER.GENDERLESS
    | CHARACTER_GENDER.UNKNOWN;
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
  type: DATA_TYPE;
  options: CharacterOptions;
  data: Character[] | null;
  status: DataStatus;
};

import { DATA_MODE, DataStatus } from '../types';

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

type EpisodeOptions = {
  name: string;
  episode: string;
};

export type EpisodeState = {
  mode: DATA_MODE;
  options: EpisodeOptions;
  data: Episode[] | null;
  status: DataStatus;
};

import { Info } from '../types';

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
  page: number | string;
};

export type EpisodeState = {
  options: EpisodeOptions;
  info: Info | null;
  data: Episode[] | null;
  isLoading: boolean;
  error?: string | null;
};

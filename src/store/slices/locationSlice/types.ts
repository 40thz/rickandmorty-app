import { Info } from '../types';

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
};

type LocationOptions = {
  name: string;
  type: string;
  dimension: string;
  page: number | string;
};

export type LocationState = {
  options: LocationOptions;
  info: Info | null;
  data: Location[] | null;
  isLoading: boolean;
  error?: string | null;
};

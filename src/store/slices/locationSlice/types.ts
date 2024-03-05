import { DATA_MODE, DataStatus } from '../types';

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
};

export type LocationState = {
  mode: DATA_MODE;
  options: LocationOptions;
  data: Location[] | null;
  status: DataStatus;
};

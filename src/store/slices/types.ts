export enum DATA_MODE {
  TABLE = 'Table',
  GRID = 'Grid',
}

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type DataStatus = {
  isLoading: boolean;
  error?: string | null;
};

export interface ResponseWithInfo<T> {
  info: Info;
  results: T;
}

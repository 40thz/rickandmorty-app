export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface ResponseWithInfo<T> {
  info: Info;
  results: T;
}

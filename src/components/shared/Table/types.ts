import { UnknownAction } from '@reduxjs/toolkit';
import { Leaves } from '@/types';

export interface FilterProps {
  setOptions: (value: Record<string, string>) => UnknownAction;
  prop: string;
}

export type CellInfo<T> = {
  origin: T;
  getValue: () => string;
};

export type TableRowType<T> = {
  header: string;
  cell?: (value: CellInfo<T>) => React.ReactNode;
  accessorKey: Leaves<T>;
  filter?: React.ReactNode;
};

export type TableProps<T> = {
  columns: TableRowType<T>[];
  data: T[] | null;
};

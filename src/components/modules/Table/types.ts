import { UnknownAction } from '@reduxjs/toolkit';

export interface FilterProps {
  setOptions: (value: Record<string, string>) => UnknownAction;
  prop: string;
}

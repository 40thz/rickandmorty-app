import { CHARACTER_GENDER, CHARACTER_STATUS } from '@/store/slices/characterSlice/types';

export const genderOptionData = [
  { id: 1, name: CHARACTER_GENDER.FEMALE },
  { id: 2, name: CHARACTER_GENDER.GENDERLESS },
  { id: 3, name: CHARACTER_GENDER.MALE },
  { id: 4, name: CHARACTER_GENDER.UNKNOWN },
];

export const statusOptionData = [
  { id: 1, name: CHARACTER_STATUS.ALIVE },
  { id: 2, name: CHARACTER_STATUS.DEAD },
  { id: 3, name: CHARACTER_STATUS.UNKNOWN },
];

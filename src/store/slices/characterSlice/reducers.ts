import { createAsyncThunk } from '@reduxjs/toolkit';
import { characterService } from '@/services/character.service';
import { CharacterState } from './types';

export const characterFind = createAsyncThunk('character/find', async (_, { getState }) => {
  const {
    character: { options },
  } = getState() as { character: CharacterState };

  try {
    const query = `?${new URLSearchParams(options as Record<string, string>).toString()}`;

    return await characterService.find(query);
  } catch (error) {
    return Promise.reject(error);
  }
});

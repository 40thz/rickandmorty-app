import { createAsyncThunk } from '@reduxjs/toolkit';
import { episodeService } from '@/services/episode.service';
import { EpisodeState } from './types';

export const episodeFind = createAsyncThunk('episode/find', async (_, { getState }) => {
  const {
    episode: { options },
  } = getState() as { episode: EpisodeState };

  try {
    const query = `?${new URLSearchParams(options as Record<string, string>).toString()}`;

    return await episodeService.find(query);
  } catch (error) {
    return Promise.reject(error);
  }
});

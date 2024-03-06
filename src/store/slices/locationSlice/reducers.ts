import { createAsyncThunk } from '@reduxjs/toolkit';
import { locationService } from '@@/services/location.service';
import { LocationState } from './types';

export const locationFind = createAsyncThunk('location/find', async (_, { getState }) => {
  const {
    location: { options },
  } = getState() as { location: LocationState };

  try {
    const query = `?${new URLSearchParams(options as Record<string, string>).toString()}`;

    return await locationService.find(query);
  } catch (error) {
    return Promise.reject(error);
  }
});

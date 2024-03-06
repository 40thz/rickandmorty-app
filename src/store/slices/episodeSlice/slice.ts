import { createSlice } from '@reduxjs/toolkit';
import { DATA_MODE } from '../types';
import { episodeFind } from './reducers';
import { EpisodeState } from './types';

export const initialState: EpisodeState = {
  mode: DATA_MODE.TABLE,
  options: {
    name: '',
    episode: '',
  },
  data: [],
  status: {
    isLoading: true,
    error: null,
  },
};

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    setOptions(state, action) {
      state.options = { ...state.options, ...action.payload };
    },
    setDataMode(state, { payload }) {
      state.mode = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(episodeFind.pending, (state) => {
      state.status.isLoading = true;
    });

    builder.addCase(episodeFind.fulfilled, (state, { payload: { results } }) => {
      state.data = results;
      state.status.isLoading = false;
      state.status.error = null;
    });

    builder.addCase(episodeFind.rejected, (state, action) => {
      state.data = [];
      state.status.isLoading = true;
      state.status.error = action.error.message;
    });
  },
});

export const { setOptions, setDataMode } = episodeSlice.actions;

export const episodeReducer = episodeSlice.reducer;

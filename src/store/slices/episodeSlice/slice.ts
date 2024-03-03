import { createSlice } from '@reduxjs/toolkit';
import { episodeFind } from './reducers';
import { EpisodeState } from './types';

const initialState: EpisodeState = {
  options: {
    name: '',
    episode: '',
    page: 1,
  },
  info: null,
  data: [],
  isLoading: true,
  error: null,
};

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    setOptions(state, action) {
      state.options = { ...state.options, ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(episodeFind.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(episodeFind.fulfilled, (state, { payload: { results, info } }) => {
      state.info = info;
      state.data = results;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(episodeFind.rejected, (state, action) => {
      state.info = null;
      state.data = [];
      state.isLoading = true;
      state.error = action.error.message;
    });
  },
});

export const { setOptions } = episodeSlice.actions;

export const episodeReducer = episodeSlice.reducer;

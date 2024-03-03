import { createSlice } from '@reduxjs/toolkit';
import { locationFind } from './reducers';
import { LocationState } from './types';

const initialState: LocationState = {
  options: {
    name: '',
    type: '',
    dimension: '',
    page: 1,
  },
  info: null,
  data: [],
  isLoading: true,
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setOptions(state, action) {
      state.options = { ...state.options, ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(locationFind.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(locationFind.fulfilled, (state, { payload: { results, info } }) => {
      state.info = info;
      state.data = results;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(locationFind.rejected, (state, action) => {
      state.info = null;
      state.data = [];
      state.isLoading = true;
      state.error = action.error.message;
    });
  },
});

export const { setOptions } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;

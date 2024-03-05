import { createSlice } from '@reduxjs/toolkit';
import { DATA_MODE } from '../types';
import { locationFind } from './reducers';
import { LocationState } from './types';

const initialState: LocationState = {
  mode: DATA_MODE.TABLE,
  options: {
    name: '',
    type: '',
    dimension: '',
  },
  data: [],
  status: {
    isLoading: true,
    error: null,
  },
};

const locationSlice = createSlice({
  name: 'location',
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
    builder.addCase(locationFind.pending, (state) => {
      state.status.isLoading = true;
    });

    builder.addCase(locationFind.fulfilled, (state, { payload: { results } }) => {
      state.data = results;
      state.status.isLoading = false;
      state.status.error = null;
    });

    builder.addCase(locationFind.rejected, (state, action) => {
      state.data = [];
      state.status.isLoading = true;
      state.status.error = action.error.message;
    });
  },
});

export const { setOptions, setDataMode } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;

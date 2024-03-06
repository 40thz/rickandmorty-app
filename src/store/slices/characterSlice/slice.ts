import { createSlice } from '@reduxjs/toolkit';
import { DATA_MODE } from '../types';
import { characterFind } from './reducers';
import { CharacterState } from './types';

export const initialState: CharacterState = {
  mode: DATA_MODE.TABLE,
  options: {
    name: '',
    species: '',
    type: '',
    gender: '',
    status: '',
  },
  data: [],
  status: {
    isLoading: true,
    error: null,
  },
};

const characterSlice = createSlice({
  name: 'character',
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
    builder.addCase(characterFind.pending, (state) => {
      state.status.isLoading = true;
    });

    builder.addCase(characterFind.fulfilled, (state, { payload: { results } }) => {
      state.data = results;
      state.status.isLoading = false;
      state.status.error = null;
    });

    builder.addCase(characterFind.rejected, (state, action) => {
      state.data = [];
      state.status.isLoading = true;
      state.status.error = action.error.message;
    });
  },
});

export const { setOptions, setDataMode } = characterSlice.actions;

export const characherReducer = characterSlice.reducer;

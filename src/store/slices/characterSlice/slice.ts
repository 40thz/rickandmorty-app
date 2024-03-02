import { createSlice } from '@reduxjs/toolkit';
import { characterFind } from './reducers';
import { CharacterState } from './types';

const initialState: CharacterState = {
  options: {
    name: '',
    species: '',
    type: '',
    gender: '',
    status: '',
    page: 1,
  },
  info: null,
  data: [],
  isLoading: true,
  error: null,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setOptions(state, action) {
      state.options = { ...state.options, ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(characterFind.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(characterFind.fulfilled, (state, { payload: { results, info } }) => {
      state.info = info;
      state.data = results;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(characterFind.rejected, (state, action) => {
      state.info = null;
      state.data = [];
      state.isLoading = true;
      state.error = action.error.message;
    });
  },
});

export const { setOptions } = characterSlice.actions;

export const characherReducer = characterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { characterFind } from './reducers';
import { CharacterState, DATA_TYPE } from './types';

const initialState: CharacterState = {
  type: DATA_TYPE.TABLE,
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
    setDataType(state, { payload }) {
      state.type = payload;
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

export const { setOptions, setDataType } = characterSlice.actions;

export const characherReducer = characterSlice.reducer;

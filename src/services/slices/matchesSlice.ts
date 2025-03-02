import { getMatches } from '@api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMatch } from '../../utils/types';

export interface matchesState {
  matches: TMatch[] | [];
  isLoading: boolean;
  error: null | string | undefined;
}

const initialState: matchesState = {
  matches: [],
  error: null,
  isLoading: false
};

export const getMatchesInfo = createAsyncThunk<TMatch[], void>(
  'matches/getMatches',
  async () => {
    const res = await getMatches();
    return res;
  }
);

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatchesInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMatchesInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getMatchesInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.matches = action.payload;
      });
  },
  selectors: {
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectMatches: (state) => state.matches
  }
});

export const matchesReducer = matchesSlice.reducer;
export const { selectIsLoading, selectError, selectMatches } =
  matchesSlice.selectors;

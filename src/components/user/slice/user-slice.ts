import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { loginActionExtraReducers } from './actions/login';
import { UserState } from './user-state';
import { REHYDRATE } from 'redux-persist';
import { fetchProfileActionExtraReducers } from './actions/fetch-profile';

const initialState: UserState = {
  data: undefined,
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = undefined;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    const hydrationReducer = (state: any, action: any) => ({
      ...state,
      ...action.payload?.user,
    });
    builder
      .addCase(HYDRATE, hydrationReducer)
      .addCase(REHYDRATE, hydrationReducer);

    loginActionExtraReducers(builder);
    fetchProfileActionExtraReducers(builder);
  },
});

export const { logout } = userSlice.actions;

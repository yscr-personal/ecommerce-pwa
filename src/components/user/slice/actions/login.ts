import bffRequest from '@/components/requests/bff-request';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '../user-state';
import { UserAuthTokens } from '../../interfaces/user-auth-token';

type LoginActionPayload = {
  email: string;
  password: string;
};

export const loginAction = createAsyncThunk<UserAuthTokens, LoginActionPayload>(
  'user/login',
  (payload, { signal }) =>
    bffRequest('user/login', 'POST', payload, {
      signal,
    }),
  {
    condition: (_, { getState }) => {
      const { user } = getState() as { user: UserState };
      return user.status !== 'loading';
    },
  },
);

export const loginActionExtraReducers = (
  builder: ActionReducerMapBuilder<UserState>,
) =>
  builder
    .addCase(loginAction.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.status = 'finished';
      state.data = {
        ...state.data,
        auth_tokens: action.payload,
      };
    })
    .addCase(loginAction.rejected, (state) => {
      state.status = 'error';
    });

import bffRequest from '@/components/requests/bff-request';
import { AppState } from '@/store';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { UserProfile } from '../../interfaces/user-profile';
import { UserState } from '../user-state';

export const fetchProfileAction = createAsyncThunk<
  UserProfile,
  void,
  { state: AppState }
>('user', (_, { signal, getState }) =>
  bffRequest('user/profile', 'GET', null, {
    signal,
    headers: {
      Authorization: `Bearer ${
        getState().user.data?.auth_tokens?.access_token
      }`,
    },
  }),
);

export const fetchProfileActionExtraReducers = (
  builder: ActionReducerMapBuilder<UserState>,
) =>
  builder
    .addCase(fetchProfileAction.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProfileAction.fulfilled, (state, action) => {
      state.status = 'finished';
      state.data = {
        ...state.data,
        profile: action.payload,
      };
    })
    .addCase(fetchProfileAction.rejected, (state) => {
      state.status = 'error';
    });

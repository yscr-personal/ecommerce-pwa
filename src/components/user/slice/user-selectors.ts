import { AppState } from '@/store';

export const selectUserState = (state: AppState) => state.user;

export const selectUserProfile = (state: AppState) =>
  selectUserState(state).data?.profile;

export const selectUserToken = (state: AppState) =>
  selectUserState(state).data?.auth_tokens?.access_token;

export const selectUserStatus = (state: AppState) =>
  selectUserState(state).status;

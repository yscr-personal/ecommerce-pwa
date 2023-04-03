import { UserAuthTokens } from '../interfaces/user-auth-token';
import { UserProfile } from '../interfaces/user-profile';

export type UserState = {
  status: 'idle' | 'loading' | 'finished' | 'error';
  data?: {
    auth_tokens?: UserAuthTokens;
    profile?: UserProfile;
  };
};

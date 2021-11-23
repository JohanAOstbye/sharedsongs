import { User as authUser } from 'firebase/auth';

type firebaseUser = {
  uid: string;
  spotifyConnected: boolean;
  isAdmin: boolean;
};

export type { authUser, firebaseUser };

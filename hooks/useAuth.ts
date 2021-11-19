import { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

export const useAuth = () => {
  const authState: [User, boolean, Error] = useAuthState(auth);
  return authState;
};

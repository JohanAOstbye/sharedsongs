import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

type sessionState =
  | { data: Session; status: 'authenticated' }
  | { data: null; status: 'loading' }
  | { data: Session; status: 'authenticated' }
  | { data: null; status: 'loading' | 'unauthenticated' };

export const useToken = () => {
  const authState: sessionState = useSession();
  console.log(authState);
  return authState;
};

import { signOut } from '@firebase/auth';
import router from 'next/router';
import React, { useEffect } from 'react';
import FullPageLoader from '../components/Layout/FullPageLoader';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../config/firebase';

const SignOut = () => {
  const [user, loading, error] = useAuth();
  useEffect(() => {}, [loading, user]);
  if (loading) return <FullPageLoader />;
  if (user) {
    signOut(auth);
  } else {
    typeof window !== 'undefined' && router.push('/');
  }

  return <FullPageLoader />;
};

export default SignOut;

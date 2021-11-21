// Next JS related
import { useRouter } from 'next/router';

// Firebase related
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../config/firebase';

// Components
import Error from '../components/elements/Error';
import React from 'react';
import Layout from '../components/Layout';
import FullPageLoader from '../components/Layout/FullPageLoader';

export default function Login() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <FullPageLoader />;
  else if (error) return <Error msg={error} />;
  else if (user) {
    // user is already logged in, redirect to home page
    typeof window !== 'undefined' && router.push('/');
  }

  return (
    <Layout>
      <div className='bg-surface py-10 my-14'>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    </Layout>
  );
}

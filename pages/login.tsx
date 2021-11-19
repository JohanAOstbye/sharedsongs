// Next JS related
import { useRouter } from 'next/router';

// Firebase related
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../config/firebase';

// Components
import Error from '../components/elements/Error';
import Loading from '../components/elements/Loading';
import React from 'react';
import Layout from '../components/Layout';

export default function Login() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <Loading />;
  else if (error) return <Error msg={error} />;
  else if (user) {
    // user is already logged in, redirect to home page
    router.push('/');
  }

  return (
    <Layout>
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    </Layout>
  );
}

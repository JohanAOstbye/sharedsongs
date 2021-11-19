// Next JS related
import Head from 'next/head';
import { useRouter } from 'next/router';

// Firebase related
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, app, db, uiConfig } from '../config/firebase';

// Components
import Logo from '../components/elements/Logo';
import Card from '../components/elements/Card';
import Error from '../components/elements/Error';
import Loading from '../components/elements/Loading';

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
    <>
      <Head>
        <title>SS | LogIn</title>
      </Head>
      <div>
        <Card>
          <div>
            <h1>Log In to</h1>
            <Logo />
          </div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Card>
      </div>
    </>
  );
}

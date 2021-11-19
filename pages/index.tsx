import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Layout from '../components/Layout';
import { auth } from '../config/firebase';

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Layout>
      {user ? `Hello ${user.displayName}` : <Link href='/login'>login</Link>}
    </Layout>
  );
};

export default Home;

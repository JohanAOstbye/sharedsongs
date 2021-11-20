import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Hero from '../components/elements/Hero';
import Layout from '../components/Layout';
import { auth } from '../config/firebase';

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className=''>
      <Layout className=''>
        <Hero />
      </Layout>
    </div>
  );
};

export default Home;

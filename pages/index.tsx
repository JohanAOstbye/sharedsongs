import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { auth } from '../config/firebase';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default Home;

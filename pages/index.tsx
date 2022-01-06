import type { NextPage } from 'next';
import React from 'react';
import Hero from '../components/sections/Hero';
import Layout from '../components/Layout';

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

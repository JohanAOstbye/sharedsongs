import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';

const Callback = () => {
  const router = useRouter();
  const { code } = router.query;
  return (
    <Layout>
      <div>Code</div>
    </Layout>
  );
};

export default Callback;

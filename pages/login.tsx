import { Button } from '../components/elements/Button';
import Layout from '../components/Layout';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  return (
    <Layout title='About | Next.js + TypeScript Example'>
      <section className='flex items-center justify-center bg-hero-pattern bg-no-repeat bg-center w-full'>
        <div className=' max-w-xl p-6'>
          <Button onClick={signIn}>Login</Button>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;

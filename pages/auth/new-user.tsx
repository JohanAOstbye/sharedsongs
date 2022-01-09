import { Provider } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';
import { Button, ButtonLink } from '../../components/elements/Button';
import { LogoIcon } from '../../components/icons/LogoIcon';
import Layout from '../../components/Layout';

export default function SignIn({ providers }) {
  return (
    <Layout title='About | Next.js + TypeScript Example'>
      <div className='bg-surface rounded-lg p-12 flex flex-col justify-center items-center max-w-sm'>
        <LogoIcon logoClassName='h-24 w-24' className='text-4xl'></LogoIcon>
        <div className='my-4'>
          {Object.values(providers).map((provider: Provider) => (
            <div key={provider.name}>
              <Button
                onClick={() => signIn(provider.id)}
                classNames='bg-zinc-800 text-zinc-300 swhaod-lg'
              >
                Sign in with {provider.name}
              </Button>
            </div>
          ))}
        </div>
        <div className='my-2 flex flex-col items-center justify-center'>
          <p>dont have an account?</p>
          <ButtonLink link={'/auth/createuser'}>Create an account</ButtonLink>
        </div>
      </div>
    </Layout>
  );
}

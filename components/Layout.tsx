import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href='/users'>
          <a>Users List</a>
        </Link>{' '}
        | <a href='/api/users'>Users API</a>
      </nav>
    </header>
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      {children}
    </main>
    <footer className='flex items-center justify-center, w-full h-24 border-t'>
      <hr />
      <span>foot</span>
    </footer>
  </div>
);

export default Layout;

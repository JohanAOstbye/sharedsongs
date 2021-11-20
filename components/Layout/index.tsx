import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from './Head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className=' text-on-background flex flex-col items-center justify-center min-h-screen'>
    <Head title={title} />
    <Navbar />
    <main className='flex flex-col items-center justify-center w-full min-h-screen flex-1 px-5 text-center'>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;

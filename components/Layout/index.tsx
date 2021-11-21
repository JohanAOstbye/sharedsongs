import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from './Head';

type Props = {
  children?: ReactNode;
  title?: string;
  className?: string;
};

const Layout = ({
  children,
  title = 'This is the default title',
  className = 'bg-background',
}: Props) => (
  <div className=' text-on-background flex flex-col items-center justify-center min-h-screen'>
    <Head title={title} />
    <Navbar />
    <main
      className={`${className} flex flex-col items-center justify-center w-full ${
        className ? '' : 'min-h-screen'
      } flex-1 px-5 text-center`}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;

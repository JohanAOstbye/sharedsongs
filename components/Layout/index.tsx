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
}: Props) => {
  return (
    <div className={`${className} text-gray-300 min-h-screen`}>
      <Head title={title} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

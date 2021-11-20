import React, { ReactNode } from 'react';
import Link from 'next/link';

type props = {
  link: string;
  children: ReactNode;
  classNames?: string;
};

const btnLink = ({ link = '/test', children = 'test', classNames }: props) => {
  return (
    <Link href={link}>
      <a
        className={`bg-accent text-on-accent rounded-md py-2 px-4 font-bold ${classNames}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default btnLink;

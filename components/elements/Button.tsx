import React, { ReactNode } from 'react';
import Link from 'next/link';

type props = {
  link: string;
  children: ReactNode;
  classNames?: string;
};

const Button = ({ link = '/test', children = 'test', classNames }: props) => {
  return (
    <Link href={link}>
      <a
        className={`${classNames} bg-accent text-on-accent rounded-md py-2 px-4 font-bold`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;

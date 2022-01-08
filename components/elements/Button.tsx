import React, { ReactNode } from 'react';
import Link from 'next/link';

type linkprops = {
  link: string;
  children: ReactNode;
  classNames?: string;
};

type btnprops = {
  onClick: () => {};
  children: ReactNode;
  classNames?: string;
};

export const ButtonLink = ({
  link = '/test',
  children = 'test',
  classNames,
}: linkprops) => {
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

export const Button = ({
  onClick,
  children = 'test',
  classNames,
}: btnprops) => {
  return (
    <button
      onClick={onClick}
      className={`${classNames} bg-accent text-on-accent rounded-md py-2 px-4 font-bold`}
    >
      {children}
    </button>
  );
};

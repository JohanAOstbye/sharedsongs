import Link from 'next/link';
import { ReactNode } from 'react';

type props = {
  link: string;
  children: ReactNode;
  className: string;
};

const NavLink = ({ link, children, className }: props) => {
  return (
    <Link href={link}>
      <a
        className={
          'flex py-auto py-5 px-2 hover:bg-opacity-overlayhovered hover:bg-overlay ' +
          className
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;

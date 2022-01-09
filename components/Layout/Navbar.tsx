import { motion, useCycle, Variants } from 'framer-motion';
import { MenuIcon } from '../icons/MenuIcon';
import { LogoIcon } from '../icons/LogoIcon';
import Link from 'next/link';
// import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 50,
};

export const Item = ({ link, text }: { link: string; text: string }) => {
  return (
    <motion.li className='mt-10 sm:mt-0 sm:ml-6'>
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </motion.li>
  );
};

export const ItemList = ({
  variants,
  toggle = () => {},
  className,
}: {
  toggle?: (i?: number | undefined) => void;
  variants?: Variants;
  className?: string;
}) => {
  // const session = useSession();

  return (
    <motion.ul
      variants={variants}
      className={className}
      transition={spring}
      onClick={() => {
        toggle();
      }}
    >
      <Item link={'#'} text={'Home'} />
      <Item link={'#'} text={'Work'} />
      <Item link={'#'} text={'About'} />
      <Item link={'#'} text={'Blog'} />
      {/* <Item
        link={session ? '/profile' : '/login'}
        text={session ? session.data?.expires : 'login'}
      /> */}
    </motion.ul>
  );
};

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(
    function mount() {
      window.onresize = () => {
        if (isOpen) toggleOpen();
      };
    },
    [isOpen, toggleOpen]
  );

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className='max-w-7xl flex justify-between h-16 mx-auto z-40'
      layout
    >
      <LogoIcon
        className='h-full w-auto p-3 z-50 ml-3'
        logoClassName='w-8 h-8'
      />
      <ItemList
        className='text-2xl sm:!hidden absolute w-screen flex flex-col items-center h-screen mt-16'
        variants={{
          closed: {
            x: 0,
            y: '-100vh',
            background: 'transparent',
            zIndex: 49,
          },
          open: {
            x: 0,
            y: -64,
            background: 'black',
            zIndex: 49,
          },
        }}
        toggle={() => toggleOpen()}
      />
      <ItemList className='text-xl hidden sm:flex items-center p-3 mr-3 z-50' />
      <MenuIcon
        toggle={() => toggleOpen()}
        className='h-full w-auto sm:hidden p-4 z-50 mr-3'
      />
    </motion.nav>
  );
};

export default Nav;

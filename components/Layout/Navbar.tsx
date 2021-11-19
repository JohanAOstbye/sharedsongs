import Navlink from './Navlink';
import { MusicNoteIcon, MenuIcon } from '@heroicons/react/outline';
import NavLink from './Navlink';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <header className='bg-surface opacity-elevation-2 w-full'>
      <nav className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center '>
          <div className='flex space-x-7  items-center '>
            <div className=''>
              <Navlink link='/' className=' py-4 '>
                <MusicNoteIcon className='h-8 w-8' />
                <span className='font-semibold text-gray-500 text-lg'>
                  SharedSongs
                </span>
              </Navlink>
            </div>
            <div className='hidden sm:flex items-center space-x-1'>
              <Navlink
                link='/about'
                children='about'
                className='px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
              />
              <Navlink
                link='/terms-of-service'
                children='tos'
                className='px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
              />
              <Navlink
                link='/privacy-policy'
                children='privacy'
                className='px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
              />
            </div>
          </div>
          <div className='hidden sm:flex items-center space-x-3 '>
            <Navlink
              link='/login'
              children='Log in'
              className='px-2 py-5 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300'
            />
          </div>
          <div className='sm:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button'
              onClick={toggle}
            >
              <MenuIcon className='w-6 h-6 text-gray-500' />
            </button>
          </div>
        </div>
        <div
          className={
            (show ? 'hidden' : '') + ' h-full w-full bg-surface z-10 fixed'
          }
          onClick={toggle}
        >
          <ul className=' items-center grid' onClick={toggle}>
            <NavLink
              link='/'
              children='Home'
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
            />

            <NavLink
              link='/about'
              children='About'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            />

            <NavLink
              link='/terms-of-service'
              children='Tos'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            />

            <NavLink
              link='/privacy-policy'
              children='Privacy'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

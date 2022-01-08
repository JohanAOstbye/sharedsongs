import { FaGithub, FaTwitter, FaGooglePlay, FaApple } from 'react-icons/fa';
import { MusicNoteIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <footer id='footer' className='relative z-2 m-auto max-w-7xl text-center'>
      <div className='pt-8 mx-auto container px-4 xl:px-12 2xl:px-4 lg:flex'>
        <div className='w-full lg:w-1/2 mb-10 lg:mb-0 flex'>
          <div className='w-full lg:w-1/2 px-6'>
            <ul>
              <li>
                <Link href='/info/about'>
                  <a className='text-md lg:text-sm leading-none hover:text-accent'>
                    About
                  </a>
                </Link>
              </li>
              <li className='mt-3'>
                <Link href='/info/faq'>
                  <a className='text-md lg:text-sm leading-none hover:text-accent'>
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-1/2 px-6'>
            <ul>
              <li>
                <Link href='/info/blog'>
                  <a className='text-md lg:text-sm leading-none hover:text-accent '>
                    Blog
                  </a>
                </Link>
              </li>
              <li className='mt-3'>
                <Link href='/info/changelog'>
                  <a className='text-md lg:text-sm leading-none hover:text-accent '>
                    Changelog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex'>
          <div className='w-full lg:w-1/2 px-6'>
            <ul>
              <li>
                <a
                  href='/info/privacy-policy'
                  className='text-md lg:text-sm leading-none hover:text-accent '
                >
                  Privacy policy
                </a>
              </li>
              <li className='mt-3'>
                <Link href='/info/terms-of-service'>
                  <a className='text-md lg:text-sm leading-none hover:text-accent '>
                    Terms of service
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-1/2 px-6 flex justify-center'>
            <a href='https://github.com/JohanAOstbye'>
              <div className=' cursor-pointer hover:text-accent'>
                <FaGithub className='h-6 w-6' />
              </div>
            </a>
            <a href='https://twitter.com/twitter'>
              <div className='pl-4 hover:text-accent'>
                <FaTwitter className='h-6 w-6' />
              </div>
            </a>
            <a href='https://play.google.com/store'>
              <div className='pl-4 hover:text-accent'>
                <FaGooglePlay className='h-6 w-6' />
              </div>
            </a>
            <a href='https://www.apple.com/no/app-store/'>
              <div className='pl-4 hover:text-accent'>
                <FaApple className='h-6 w-6' />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='py-12 flex flex-col justify-center items-center'>
        <Link href='/'>
          <a className='flex items-center'>
            <MusicNoteIcon className='block lg:hidden h-14 w-auto text-accent' />
            <MusicNoteIcon className='hidden lg:block h-14 w-auto text-accent' />
            <span className='text-accent text-2xl font-semibold px-1 pb-2'>
              Unkn
            </span>
          </a>
        </Link>
        <p className='mt-3 text-xs lg:text-sm leading-none text-gray-500'>
          2021 UnknLists. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

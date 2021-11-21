import { FaGithub, FaTwitter, FaGooglePlay, FaApple } from 'react-icons/fa';
import { MusicNoteIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState } from 'react';
const Footer = () => {
  const [mode, setMode] = useState('auto');
  return (
    <div className=' bg-surface w-full text-on-surface'>
      <footer id='footer' className='relative z-50'>
        <div className='pt-8'>
          <div className='mx-auto container px-4 xl:px-12 2xl:px-4'>
            <div className='lg:flex'>
              <div className='w-full lg:w-1/2 mb-16 lg:mb-0 flex'>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <Link href='/info/about'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800'>
                          About
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/info/faq'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800'>
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
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800'>
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/info/changelog'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800'>
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
                        className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800'
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className='mt-6'>
                      <Link href='/info/terms-of-service'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800'>
                          Terms of service
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-1/2 px-6 flex flex-col justify-between'>
                  <div className='flex items-center'>
                    <a href='https://github.com/JohanAOstbye'>
                      <div className='text-gray-800 cursor-pointer hover:text-accent'>
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
            </div>
          </div>
        </div>
        <div className='py-16 flex flex-col justify-center items-center'>
          <Link href='/'>
            <a className='flex items-center'>
              <MusicNoteIcon className='block lg:hidden h-14 w-auto text-accent' />
              <MusicNoteIcon className='hidden lg:block h-14 w-auto text-accent' />
              <span className='text-accent text-2xl font-semibold px-1 pb-2'>
                Unkn
              </span>
            </a>
          </Link>
          <p className='mt-6 text-xs lg:text-sm leading-none text-gray-900'>
            2021 UnknLists. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

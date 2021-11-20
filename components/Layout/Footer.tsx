import { FaGithub, FaTwitter, FaGooglePlay, FaApple } from 'react-icons/fa';
import { MusicNoteIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState } from 'react';
const Footer = () => {
  const [mode, setMode] = useState('auto');
  return (
    <div className=' bg-surface w-full text-on-surface'>
      <footer id='footer' className='relative z-50'>
        <div className=' border-t border-b border-gray-200 dark:border-gray-700 py-16'>
          <div className='mx-auto container px-4 xl:px-12 2xl:px-4'>
            <div className='lg:flex'>
              <div className='w-full lg:w-1/2 mb-16 lg:mb-0 flex'>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
                          Components
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
                          Templates
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
                          FAQ
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <a
                        href='javascript:void(0)'
                        className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
                          Free components
                        </a>
                      </Link>
                    </li>

                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='javascript:void(0)'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
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
                        href='javascript:void(0)'
                        className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className='mt-6'>
                      <Link href='/terms-of-service'>
                        <a className='text-xs lg:text-sm leading-none hover:text-accent text-gray-800 dark:text-gray-50'>
                          Terms of service
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-1/2 px-6 flex flex-col justify-between'>
                  <div className='flex items-center mb-6'>
                    <a href='javascript:void(0)'>
                      <div className='text-gray-800 dark:text-gray-50 cursor-pointer hover:text-accent'>
                        <FaGithub className='h-6 w-6' />
                      </div>
                    </a>
                    <a href='javascript:void(0)'>
                      <div className='pl-4'>
                        <FaTwitter className='h-6 w-6' />
                      </div>
                    </a>
                    <a href=''>
                      <div className='pl-4'>
                        <FaGooglePlay className='h-6 w-6' />
                      </div>
                    </a>
                    <a href=''>
                      <div className='pl-4'>
                        <FaApple className='h-6 w-6' />
                      </div>
                    </a>
                  </div>
                  <div className='relative w-36'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-16 flex flex-col justify-center items-center'>
          <Link href='javascript:void(0)'>
            <a className='flex items-center'>
              <MusicNoteIcon className='block lg:hidden h-14 w-auto text-accent' />
              <MusicNoteIcon className='hidden lg:block h-14 w-auto text-accent' />
              <span className='text-accent text-2xl font-semibold px-1 pb-2'>
                Unkn
              </span>
            </a>
          </Link>
          <p className='mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50'>
            2021 UnknLists. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

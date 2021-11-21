import React from 'react';
import Image from 'next/image';
import hero from '/public/images/hero.webp';
import Button from '../elements/Button';
import { useAuth } from '../../hooks/useAuth';

const Hero = () => {
  const [user, loading, error] = useAuth();
  return (
    <div>
      <div className='absolute inset-x-0 top-16 bottom-0 w-full h-full overflow-hidden'>
        <Image
          src={hero}
          layout='fill'
          objectFit='cover'
          className='z-minus20 bg-background'
        />
      </div>
      {user ? (
        <div className='grid grid-flow-col gap-2 grid-rows-2 md:grid-rows-1 md:gap-10 items-center bg-background shadow-box-background-lg md:shadow-box-background-xl text-on-background'>
          <div>
            <h1 className='text-center text-xl md:text-2xl py-2'>
              Connect your Account
            </h1>
            <p className='border-t-2 border-accent'>
              Connect your Account to your Spotify account
            </p>
          </div>
          <div>
            <Button link='/connect-spotify' classNames='z-3'>
              Connect Spotify
            </Button>
          </div>
        </div>
      ) : (
        <div className='grid grid-flow-col gap-2 grid-rows-2 md:grid-rows-1 md:gap-10 items-center bg-background shadow-box-background-lg md:shadow-box-background-xl text-on-background'>
          <div>
            <h1 className='text-center text-xl md:text-2xl py-2'>
              Create Account!
            </h1>
            <p>
              Unkn allows you to listen to all the songs you friends listens to!
            </p>
          </div>
          <div className='border-t-2 md:border-t-0 md:border-l-2 md:pl-10 border-accent py-4 pt-6 flex flex-col sm:flex-row md:flex-col justify-center'>
            <Button link='/connect-spotify' classNames='z-3 mx-14 sm:mx-0'>
              Create an account
            </Button>
            <div className='m-2'>
              <span>or</span>
            </div>
            <Button link='/connect-spotify' classNames='z-3 mx-14 sm:mx-0'>
              Log in
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

import React from 'react';
import Image from 'next/image';
import hero from '/public/images/hero.webp';
import Button from '../elements/Button';

const Hero = () => {
  return (
    <div>
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <Image
          src={hero}
          layout='fill'
          objectFit='cover'
          className='z-minus20'
        />
      </div>
      <div className='grid grid-flow-col gap-2 grid-rows-2 md:grid-rows-1 md:gap-10 items-center bg-background shadow-box-background-lg text-on-background'>
        <div>
          <h1 className='text-center text-xl md:text-2xl'>
            Connect your Account
          </h1>
          <p>Connect your Account to your Spotify account</p>
        </div>
        <div>
          <Button link='/connect-spotify' classNames='z-3'>
            Connect Spotify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import Image from 'next/image';
import hero from '/public/images/hero.webp';

const Hero = () => {
  return (
    <div id='home'>
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <Image
          src={hero}
          layout='fill'
          objectFit='cover'
          className=' opacity-20'
        />
      </div>
      <div>hello</div>
    </div>
  );
};

export default Hero;

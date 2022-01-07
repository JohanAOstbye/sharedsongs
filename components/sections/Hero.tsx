import Image from 'next/image';
import mello from '../../public/images/mello.svg';
import Button from '../elements/Button';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-end sm:justify-center sm:flex-row bg-hero-pattern bg-no-repeat bg-center w-full sm: min-h-[calc(100vh-64px)]'>
      <div className='p-6 max-w-lg'>
        <p className='text-4xl tracking-wide leading-[3rem]'>
          Discover and share new songs
        </p>
        <p className='text-sm my-3 tracking-wide leading-6'>
          <span className='text-accent'>Unkn</span> helps you to connect your
          playlist with your friends and share your newly discovered songs
        </p>
        <div className='flex items-center justify-center mb-10 mt-16 sm:mt-10'>
          <Button link='/signup' classNames='text-gray-800'>
            Start exploring
          </Button>
          <span className='pl-4'>or</span>
          <Button link='/login' classNames='text-accent bg-transparent'>
            login
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between w-full sm:w-96'>
        <div className='max-h-96 h-[60vw] relative w-full flex items-center justify-center'>
          <Image
            src={mello}
            alt='Mello listening'
            objectFit='contain'
            layout='fill'
            quality={100}
            objectPosition={'50% 50%'}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;

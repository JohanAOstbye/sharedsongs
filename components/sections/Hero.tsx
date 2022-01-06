import Image from 'next/image';
import mello from '../../public/images/mello.svg';
import Button from '../elements/Button';

const Hero = () => {
  return (
    <section className='flex flex-col before:bg-hero-pattern before:bg-no-repeat before:bg-cover before:bg-left before:absolute before:inset-0 before:opacity-10 relative max-w-7xl before:h-96'>
      <div className='p-6'>
        <p className='text-3xl'>Discover and share newly discovered songs</p>
        <p className='text-sm my-3'>
          <span className='text-accent'>Unkn</span> helps you to connect your
          playlist with your friends and share your newly discovered songs
        </p>
        <Button link='/signin' classNames='text-gray-800'>
          Start exploring
        </Button>
        <span className=''>or</span>
        <Button link='/login' classNames='text-accent bg-transparent'>
          login
        </Button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='h-56 relative w-full'>
          <Image
            src={mello}
            alt='Mello listening'
            objectFit='contain'
            layout='fill'
            quality={100}
            objectPosition={'50% 100%'}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;

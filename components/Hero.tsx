import { ShareIcon } from '@heroicons/react/outline';
import { LogoIcon } from './icons/LogoIcon';

const Hero = () => {
  return (
    <div className=' before:bg-hero-pattern before:bg-no-repeat before:bg-cover before:bg-left before:absolute before:inset-0 before:opacity-10 relative max-w-7xl h-96'>
      <p>
        Discorey new songs withing your and share your newly discovered songs
      </p>
      <div className='flex'>
        <p>
          <span className='text-accent'>Unkn</span> will generate a list with
          all your friends current favorite songs
        </p>
      </div>
    </div>
  );
};

export default Hero;

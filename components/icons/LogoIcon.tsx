import { MusicNoteIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const LogoIcon = ({
  className,
  logoClassName,
}: {
  className?: string;
  logoClassName?: string;
}) => (
  <div className={`${className} flex items-center`}>
    <MusicNoteIcon className={`${logoClassName} w-auto text-accent`} />
    <span className='text-accent font-semibold px-1'>Unkn</span>
  </div>
);

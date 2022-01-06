import { MusicNoteIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const LogoIcon = ({ className }: { className?: string }) => (
  <div className={`${className} flex`}>
    <MusicNoteIcon className='h-8 w-auto text-accent' />
    <span className='text-accent text-lg font-semibold px-1'>Unkn</span>
  </div>
);

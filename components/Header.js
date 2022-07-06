import React from 'react';
import Image from 'next/image';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
      {/* Left */}
      <div className='h-24 w-24 relative hidden lg:inline-grid cursor-pointer'>
        <Image
          src='http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png'
          layout='fill'
          className='object-contain'
          alt='logo'
        />
      </div>
      <div className='h-24 w-10 relative lg:hidden cursor-pointer'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png'
          layout='fill'
          className='object-contain'
          alt='logo'
        />
      </div>
      {/* Middle */}
      <div className='relative mt-1'>
        <div className='absolute top-1/2 -translate-y-1/2 left-2'>
          <SearchIcon className='h-5 text-gray-500' />
        </div>
        <input
          type='text'
          placeholder='Search'
          className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
        />
      </div>

      <div className='flex items-center space-x-4'>
        <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-100 ease-out' />
        <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-100 ease-out' />
        <img
          src='https://lh3.googleusercontent.com/a-/AOh14Gh3Hk1zzy8sZ7Uolrq78h3tfbo3GjG6oiNKu2lf6Q=s96-c'
          alt='user-image'
          className='h-10 rounded-full cursor-pointer'
        />
      </div>
    </div>
  );
}

export default Header;

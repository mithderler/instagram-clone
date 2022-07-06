import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      {/* Left */}
      <div className='flex items-center justify-between max-w-6xl'>
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

        <h1>Right sides</h1>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  );
}

export default Header;

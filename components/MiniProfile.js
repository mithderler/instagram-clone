import React from 'react';

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src='https://lh3.googleusercontent.com/a-/AOh14Gh3Hk1zzy8sZ7Uolrq78h3tfbo3GjG6oiNKu2lf6Q=s96-c'
        className='h-16 rounded-full border p-[2px]'
        alt='user-image'
        referrerPolicy='no-referrer'
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-semibold'>mithderler</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  );
}

export default MiniProfile;

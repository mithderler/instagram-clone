import React from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/outline';

function Post({ id, img, userImg, caption, username }) {
  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* Post Header */}

      <div className='flex items-center justify-between p-5'>
        <img
          src={userImg}
          alt={username}
          className='h-12 rounded-full object-cover border p-1 mr-3 cursor-pointer'
          referrerPolicy='no-referrer'
        />
        <p className='font-semibold flex-1'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/* Post Image */}

      <img src={img} className='object-cover w-full' alt='post image' />
    </div>
  );
}

export default Post;

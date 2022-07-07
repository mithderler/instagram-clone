import React from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';

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

      {/* Post Buttons */}

      <div className='flex justify-between px-4 pt-4'>
        <div className='flex items-center space-x-4'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      {/* Post comments */}
      <p className='p-5 truncate'>
        <span className='font-semibold mr-2'>{username}</span>
        {caption}
      </p>

      {/* Post input box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          type='text'
          className='border-none flex-1 focus:ring-0'
          placeholder='Enter your comment..'
        />
        <button className='text-blue-400 font-semibold'>Post</button>
      </form>
    </div>
  );
}

export default Post;

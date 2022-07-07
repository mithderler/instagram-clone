import React from 'react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

function Feed() {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-3 lg:max-w-6xl mx-auto'>
      <section className='lg:col-span-2'>
        <Stories />
        <Posts />
      </section>

      <section className='hidden lg:inline-grid lg:col-span-1'>
        <div className='fixed'>
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;

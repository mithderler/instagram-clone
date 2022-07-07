import React from 'react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 mx-auto  ${
        session ? 'lg:grid-cols-3 lg:max-w-6xl' : 'lg:grid-cols-2 lg:max-w-3xl'
      } `}
    >
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

import { useSession, signOut } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession();
  console.log('sess: ', session);

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src={session?.user.image}
        className='h-16 rounded-full border p-[2px]'
        alt='user-image'
        referrerPolicy='no-referrer'
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-semibold'>{session?.user.username}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className='font-semibold text-blue-400 text-sm'>
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;

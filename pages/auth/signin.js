import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className='flex justify-center space-x-7 mt-20'>
        <img
          className='hidden md:inline-flex md:w-80 object-cover rotate-6'
          src='https://axistasarim.com/wp-content/uploads/2020/10/axisinstagram-600x546.png'
          alt='instagram-image'
        />
        <div className=''>
          {Object.values(providers).map((provider) => (
            <div className='flex flex-col items-center' key={provider.id}>
              <img
                className='w-32 object-cover'
                src='https://2.bp.blogspot.com/-ZPqgJKBi0X0/XN8Auej-3XI/AAAAAAAAdxU/JsMWQGdKASM1E501RmQb7_zZ5cPL8E-IwCLcBGAs/s1600/instagram-png.png'
                alt='instagram-logo'
              />
              <p className='text-sm italic my-10 text-center'>
                This app is created as an Instagram Clone
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackURL: '/' })}
                className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

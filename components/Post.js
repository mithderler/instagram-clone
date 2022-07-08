import React, { useEffect, useState } from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import Moment from 'react-moment';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

function Post({ id, img, userImg, caption, username }) {
  const { data: session } = useSession();
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        const fetchedComments = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setComments(fetchedComments);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  async function sendComment(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts', id, 'comments'), {
        comment: userComment,
        username: session.user.username,
        userImage: session.user.image,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setUserComment('');
    }
  }

  return (
    <div className='bg-white my-7 border rounded-md'>
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

      <img src={img} className='object-cover w-full' alt='post image' />

      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex items-center space-x-4'>
            <HeartIcon className='btn' />
            <ChatIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      <p className='p-5 truncate'>
        <span className='font-semibold mr-2'>{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
          {comments.map((comment) => (
            <div
              className='flex items-center space-x-2 mb-2 text-sm'
              key={comment.id}
            >
              <img
                src={comment.userImage}
                className='h-7 rounded-full object-cover'
                alt='user-image'
                referrerPolicy='no-referrer'
              />
              <p className='font-semibold'>{comment.username}</p>
              <p className='flex-1 truncate'>{comment.comment}</p>
              <Moment fromNow>{comment.timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7' />
          <input
            type='text'
            className='border-none flex-1 focus:ring-0'
            placeholder='Enter your comment..'
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
          />
          <button
            type='submit'
            disabled={!userComment.trim()}
            onClick={sendComment}
            className='text-blue-400 font-semibold cursor-pointer disabled:text-blue-100 disabled:cursor-default'
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;

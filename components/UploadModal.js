import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/outline';
import {
  addDoc,
  doc,
  collection,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';

import { db, storage } from '../firebase';
import { modalState } from '../atom/modalAtom';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

Modal.setAppElement('#__next');

function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  async function uploadPost() {
    if (loading) return;
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        caption: captionRef.current.value,
        username: session.user.username,
        profileImg: session.user.image,
        timestamp: serverTimestamp(),
      });

      const imageRef = ref(storage, `posts/${docRef.id}/image`);
      await uploadString(imageRef, selectedFile, 'data_url').then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, 'posts', docRef.id), {
            image: downloadURL,
          });
        }
      );
    } catch (error) {
      console.log('ERROR: ', error);
    } finally {
      setSelectedFile(null);
      setOpen(false);
      setLoading(false);
    }
  }

  function addImageToPost(event) {
    setLoading(true);
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
    setLoading(false);
  }

  return (
    <div>
      <Modal
        className='bg-white border-2 border-gray-200 rounded-md shadow-md max-w-lg w-[90%] p-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
        isOpen={open}
        onRequestClose={() => {
          setOpen(false);
          setSelectedFile(null);
        }}
      >
        <div className='flex flex-col justify-center items-center h-[100%]'>
          {selectedFile ? (
            <>
              <img
                src={selectedFile}
                className='w-full max-h-64 object-cover cursor-pointer relative'
                onClick={() => filePickerRef?.current.click()}
                alt=''
              />
              <span
                onClick={() => setSelectedFile(null)}
                className='absolute top-8 right-8 z-10 h-8 w-8 bg-gray-700 rounded-full p-[2px] opacity-70 text-white text-lg font-semibold shadow-lg hover:brightness-125 hover:cursor-pointer flex justify-center items center transition-transform duration-200 ease-out'
              >
                X
              </span>
            </>
          ) : (
            <CameraIcon
              onClick={() => filePickerRef.current.click()}
              className='cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500'
            />
          )}
          <input
            type='file'
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
          />
          <input
            type='text'
            ref={captionRef}
            maxLength='150'
            placeholder='Please enter your caption...'
            className='m-4 border-none text-center w-full focus:ring-0'
          />
          <button
            disabled={!selectedFile || loading}
            onClick={uploadPost}
            className='w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'
          >
            Upload Post
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default UploadModal;

import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import Story from './Story';

function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const newUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(newUsers);
    console.log(newUsers);
  }, []);
  return (
    <div>
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}

export default Stories;

import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      jobTitle: minifaker.jobTitle({ locale: 'en' }),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex items-center justify-between mb-5 text-sm'>
        <h3 className='font-semibold text-gray-400'>Suggestion for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div className='flex items-center mt-3' key={suggestion.id}>
          <img
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt={suggestion.jobTitle}
            className='h-10 rounded-full border p-[2px]'
          />
          <div className='flex-1 ml-4 mr-2'>
            <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
            <h3 className='text-sm text-gray-400 truncate max-w-[180px]'>
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className='font-semibold text-blue-400 text-sm'>
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;

import React, { useState } from 'react';

const Tag = () => {
  const [tags, setTags] = useState(['CodeStates']);

  const addTags = (e) => {
    if (e.target.value.trim() !== '') {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };

  const removeTags = (targetIndex) => {
    setTags(tags.filter((_, index) => index !== targetIndex));
  };
  return (
    <div className='flex flex-col border-2 w-1/2 mx-auto rounded-lg p-2 mb-10 '>
      <h2 className='font-bold'>Tag</h2>
      <div className='flex flex-wrap items-center border-2 rounded-lg w-4/5 mx-auto my-4 p-2 focus-within:border-indigo-700'>
        <ul className='flex flex-wrap p-1'>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='flex flex-wrap items-center bg-indigo-700 py-1 px-2 text-white rounded-lg mr-2 my-1'>
              <span>{tag}</span>
              <button
                type='button'
                onClick={() => removeTags(index)}
                className='flex justify-center items-center w-4 h-4 rounded-full bg-white text-indigo-700 ml-1'>
                x
              </button>
            </li>
          ))}
        </ul>
        <input
          type='text'
          placeholder='Press enter to add tags'
          onKeyUp={(e) => (e.key === 'Enter' ? addTags(e) : null)}
          className='flex-1 outline-none'
        />
      </div>
    </div>
  );
};

export default Tag;

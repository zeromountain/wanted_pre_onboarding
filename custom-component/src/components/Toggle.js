import React from 'react';

const Toggle = () => {
  return (
    <div className='flex flex-col border-2 w-1/2 mx-auto rounded-lg p-2 h-40 mb-10'>
      <h2 className='font-bold'>토글</h2>
      <div className='flex justify-center items-center my-2'>
        <label htmlFor='toggle-switch'>
          <input
            type='checkbox'
            id='toggle-switch'
            className='cursor-pointer h-16 w-32 rounded-full appearance-none bg-gray-500 bg-opacity-50 checked:bg-violet-800 transition duration-200 '
          />
        </label>
      </div>
    </div>
  );
};

export default Toggle;

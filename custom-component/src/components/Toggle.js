import React, { useState } from 'react';

const Toggle = () => {
  const [on, setOn] = useState(false);

  const handleCheckboxClick = () => {
    setOn((prev) => !prev);
  };

  return (
    <div className='flex flex-col border-2 w-1/2 mx-auto rounded-lg p-2 h-40 mb-10'>
      <h2 className='font-bold'>토글</h2>
      <div className='flex flex-col justify-center items-center my-2'>
        <label htmlFor='toggle-switch'>
          <input
            type='checkbox'
            id='toggle-switch'
            className='cursor-pointer h-12 w-24 rounded-full appearance-none bg-gray-500 bg-opacity-50 checked:bg-indigo-700 transition duration-200 '
            onClick={handleCheckboxClick}
          />
        </label>
        <span>Toggle Switch {on ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
};

export default Toggle;

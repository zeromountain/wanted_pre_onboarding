import React, { useState } from 'react';

const ClickToEdit = () => {
  const [user, setUser] = useState({ name: '김코딩', age: 20 });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-col border-2 w-1/2 mx-auto mb-10 rounded-lg p-2'>
      <h2 className='font-bold'>Click To Edit</h2>
      <div className='my-3 mx-auto'>
        <span>이름</span>
        <input
          type='text'
          name='name'
          defaultValue={user.name}
          onBlur={handleInputChange}
          className='w-32 text-center border-2 outline-none mx-3'
        />
      </div>
      <div className='my-3 mx-auto'>
        <span>나이</span>
        <input
          type='text'
          name='age'
          defaultValue={user.age}
          onBlur={handleInputChange}
          className='w-32 text-center border-2 outline-none mx-3'
        />
      </div>
      <span className='w-full text-center'>
        이름: {user.name}
        &nbsp;&nbsp; 나이: {user.age}
      </span>
    </div>
  );
};

export default ClickToEdit;

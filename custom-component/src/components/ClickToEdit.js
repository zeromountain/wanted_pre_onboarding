import React, { useState } from 'react';

const ClickToEdit = () => {
  const [user, setUser] = useState({ name: '김코딩', age: 20 });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Click To Edit</h2>
      <span>이름</span>
      <input
        type='text'
        name='name'
        defaultValue={user.name}
        onBlur={handleInputChange}
      />
      <span>나이</span>
      <input
        type='text'
        name='age'
        defaultValue={user.age}
        onBlur={handleInputChange}
      />
      <span>
        이름: {user.name}
        나이: {user.age}
      </span>
    </div>
  );
};

export default ClickToEdit;

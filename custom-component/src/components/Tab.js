import React, { useEffect, useState } from 'react';
import fetchTabsData from '../data/fetchTabsData';

const Tab = () => {
  const [tabsData, setTabsData] = useState([]);

  const handleTabsClick = (index) => {
    setTabsData((prev) =>
      prev.map((data, idx) => ({
        ...data,
        isActive: idx === index ? true : false,
      }))
    );
  };

  useEffect(() => {
    fetchTabsData().then((data) => {
      setTabsData(data);
    });
  }, []);

  return (
    <div className='flex flex-col border-2 w-1/2 mx-auto rounded-lg p-2 mb-10'>
      <h2 className='font-bold mb-3'>Tab</h2>
      <div className='flex text-center bg-gray-500 bg-opacity-30 h-10 leading-10'>
        {tabsData.map(({ title, isActive }, index) => (
          <nav
            key={index}
            className={`flex-auto cursor-pointer ${
              isActive && 'bg-indigo-700 text-white transition'
            }`}
            onClick={() => handleTabsClick(index)}>
            {title}
          </nav>
        ))}
      </div>
      <div className='flex justify-center my-20'>
        {tabsData.map(
          ({ content, isActive }, index) =>
            isActive && <span key={index}>{content}</span>
        )}
      </div>
    </div>
  );
};

export default Tab;

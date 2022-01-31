import React, { useEffect, useState } from 'react';
import fetchAutoCompleteData from '../data/fetchAutoCompleteData';

const AutoComplete = () => {
  const [words, setWords] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (val) => {
    let matches = [];
    if (val.length > 0) {
      matches = words.filter((word) => {
        const regex = new RegExp(`${val}`, 'gi');
        return word.match(regex);
      });
    }
    setSuggestions(matches);
    setText(val);
  };

  const addText = (suggestion) => {
    setText(suggestion);
    setSuggestions([]);
  };

  const removeText = (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    setText('');
    setSuggestions([]);
  };

  useEffect(() => {
    const loadWords = async () => {
      try {
        const res = await fetchAutoCompleteData();
        setWords([...words, ...res]);
      } catch (err) {
        console.error(err);
      }
    };
    loadWords();
  }, []);
  return (
    <div className='flex flex-col border-2 w-1/2 h-60 mx-auto rounded-lg p-2 mb-10 '>
      <h2 className='font-bold'>AutoComplete</h2>
      <div className='relative my-auto' onClick={(e) => removeText(e)}>
        <input
          type='text'
          className='w-full outline-none rounded-lg border-2 border-gray-300'
          onChange={(e) => handleChange(e.target.value)}
          value={text}
        />
        <button className='absolute right-2'>x</button>
        {suggestions.length !== 0 && (
          <div className='rounded-lg border-2'>
            {suggestions.map((suggestion, idx) => (
              <div
                key={idx}
                className='cursor-pointer hover:bg-indigo-400 rounded-lg'
                onClick={() => addText(suggestion)}>
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'

const GameSettings = ({ SettingGames, SettingSets }, props) => {
  const [activeButtonGroup1, setActiveButtonGroup1] = useState('');
  const [activeButtonGroup2, setActiveButtonGroup2] = useState('');

  const buttonGroups = [
    { id: 'group1', values: ['1', '2', '3', '4', '5'] },
    { id: 'group2', values: ['1', '3', '5', '7', '9'] },
  ];

  const handleClick = (group, value) => {
    if (group === 'group1') {
      setActiveButtonGroup1(value);
      SettingGames(value)
    } else if (group === 'group2') {
      setActiveButtonGroup2(value);
      SettingSets(value)
    }


  };
  return (
    <>
      <div className="btn-group flex flex-col justify-center">
      <h3 className='text-center'>Select Number of Games</h3>
        <div className="btn-group__item " id="group1">
          
          {buttonGroups[0].values.map((value) => (
            <button
              key={value}
              className={`${activeButtonGroup1 === value ? 'm-1 bg-blue-700 text-white font-bold py-2 px-4 rounded' : 'm-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} `}
              onClick={() => handleClick('group1', value)}
            >
              {value}
            </button>
          ))}
        </div>
        <h3 className='text-center'> Select Number of Sets</h3>
        <div className="btn-group__item" id="group2">
          
          {buttonGroups[1].values.map((value) => (
            <button
              key={value}
              className={`${activeButtonGroup2 === value ? 'm-1 bg-blue-700 text-white font-bold py-2 px-4 rounded' : 'm-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}`}
              onClick={() => handleClick('group2', value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>


    </>

  )
}

export default GameSettings


import React from 'react'


const Games = (props) => {
  return (
        <div className="text-center text-white bg-black p-3 rounded w-screen font-bold fs-1"> {props.name}</div>
  ) 
}

export default Games

// Find a way to conditionally render particular game modes. 

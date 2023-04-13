import React from 'react'


const Users = (props) => {

  console.log("Rerendered")
  return (
    <>
      <div className="m-2 p-6 max-w-sm mx-auto rounded-xl shadow-lg flex flex-col items-center justify-center space-x-4 hover:outline-none hover:border-4  hover:border-gray-500" onClick={() => props.handleChange(props.index, props.player.active)}
        style={{'backgroundColor': props.player.active ? '#309F6A' : '#E3292E',
                'color': props.player.active ? 'white' : "black"}}
        >
         {props.player.name}
         <div className=''>
         3 Dart Average: {(props.player.avg)}
         </div>
         <div className=''>
          Darts Thrown : {props.player.darts}
         </div>
      </div>
    </>

  )
}

export default Users;

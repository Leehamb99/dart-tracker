import React from 'react'
import axios from 'axios'


const Users = (props) => {


  console.log("Rerendered")
  return (
    <>
      <div className='flex-none rounded-xl shadow-lg text-center hover:outline-none hover:border-4 hover:border-[#F9DFBC] m-1' style={{
        'backgroundColor': props.player.active ? '#F9DFBC' : '#E3292E',
        'color': props.player.active ? 'black' : "black",
        'opacity': props.player.active ? '1' : '0.7'
      }}>

      <div className='flex items-center justify-center'>


          <button className='bg-black grow text-white' onClick={() => props.deletePlayer(props.player.id)}> X </button>

      </div>
     

        <div className="flex flex-col" onClick={() => props.handleChange(props.index, props.player.active)}
        >
          {props.player.name}
          <div className=''>
            3 Dart Average : {(props.player.avg)}
          </div>
          <div className=''>
            Average DPL : {props.player.games_won ? props.player.darts / props.player.games_won : 1}
          </div>
          <div className=''> Games Played : {props.player.games_played}</div>
        </div>
      </div>
    </>


  )
}

export default Users;

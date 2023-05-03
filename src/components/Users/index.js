import React from 'react'


const Users = (props) => {

  console.log("Rerendered")
  return (
    
      <div className="flex-none w-1/2 m-1 py-6 px-3 rounded-xl first:pl-6 last:pr-6 shadow-lg text-center hover:outline-none hover:border-4  hover:border-[#F9DFBC]" onClick={() => props.handleChange(props.index, props.player.active)}
        style={{'backgroundColor': props.player.active ? '#F9DFBC' : '#E3292E',
                'color': props.player.active ? 'black' : "black",
                'opacity': props.player.active ? '1' : '0.7' }}
        >{props.player.name}
         <div className=''>
          3 Dart Average : {(props.player.avg)}
         </div>
         <div className=''>
          Average DPL : {props.player.games_won ? props.player.darts / props.player.games_won : 1 }
         </div>
         <div className=''> Games Played : {props.player.games_played}</div>
      </div>
    

  )
}

export default Users;

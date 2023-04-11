import React from 'react'


const Users = (props) => {

  console.log("Rerendered")
  return (
    <>
      <div className="UserContainerItem" onClick={() => props.handleChange(props.index, props.player.active)}
        style={{'color': props.player.active ? 'pink' : 'black'}}
        >
         {props.player.name}
         <div>
         3 Dart Average: {(props.player.avg)}
         </div>
         <div>
          Darts Thrown : {props.player.darts}
         </div>
      </div>
    </>

  )
}

export default Users;

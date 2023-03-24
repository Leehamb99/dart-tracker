import React from 'react'
import { useState, useEffect } from 'react'

const Users = (props) => {

  console.log("Rerendered")
  
  return (
    <>
      <div className="UserContainerItem" onClick={() => props.handleChange(props.player.id, props.player.active)}
        style={{'color': props.player.active ? 'pink' : 'black'}}>
          {props.player.name}
      </div>
    </>

  )
}

export default Users;

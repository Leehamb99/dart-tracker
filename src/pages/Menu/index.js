import React from 'react'
import { Games, Users, GameSettings } from '../../components'
const games = ["501", "301","101" , "Around The World", "Profiles"]
var players = [{ id: 0, name: 'Liam', score: 200, finish: 'n/a', legs: 0 }, { id: 1, name: 'Jade', score: 200, finish: 'n/a', legs: 0 }, { id: 2, name: 'Paul', score: 200, finish: 'n/a', legs: 0 }, { id: 3, name: 'Dave', score: 200, finish: 'n/a', legs: 0 }]

const Menu = () => {

  return (
    <>
    <div className ="GameContainer">
        {games.map((game) => (
            <Games name={game}/>
            )) }
        
   </div>

   <div className="UserContainer">
        {players.map((player) => (
            <Users name={player.name} />
        ))}
   </div>

   <div className="GameSettingsContainer">
        <GameSettings />
   </div>
            </>
  )
}

export default Menu

// See what is active when game start, then send that data. 

import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Games, Users, GameSettings } from '../../components'
import { Game } from '../../pages'
import Button from 'react-bootstrap/Button';
import { ToggleButtonGroup } from 'react-bootstrap';



const games = ["501", "301", "101", "Around The World", "Profiles"]




const Menu = () => {
  let selectablePlayers =[{ id: 0, name: 'Liam', active: false }, { id: 1, name: 'Jade', active: false }, { id: 2, name: 'Paul', active: false}, { id: 3, name: 'Dave', active: false }]
  const [numOfGames, setNumOfGames] = useState(0)
  const [numOfSets, setNumOfSets] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [players, setPlayers ] = useState (
    selectablePlayers
  )



  const handleChange = (x, y) => {
    console.log("changing ", x)
    setClicks(clicks + 1)    

    if (clicks > 0){
      selectablePlayers = players
      selectablePlayers[x] = {
        ...players[x],
        active: !players[x].active
      }

    }else{
      selectablePlayers[x] = {
        ...selectablePlayers[x],
        active: !y
      }

    }


  }
  


  const SettingGames = (x) => {
    console.log("works")
    setNumOfGames(x)
    console.log(numOfGames)
    console.log(numOfSets)

  }
  const SettingSets = (x) => {
    console.log("works")
    setNumOfSets(x)
    console.log(numOfSets)
    console.log(numOfGames)
  }

  const whoActive = () => {
    players.map((player, index) => {
      if (player.active) {
        players.push( {id: index, name: player.name, score: 501, finish: 'n/a', legs: 0 }  )
      }
      else{
        index--
      }





})}



  return (
    <>
      {numOfGames && numOfSets ?


        <Game numOfGames={numOfGames} numOfSets={numOfSets} players={players}/>
      
        :

        <div className="MenuContainer">

          <div className="GameContainer">
            {games.map((game, key) => (
              <Games key={key} name={game} />
            ))}

          </div>
          <h2> Users </h2>
          <div className="UserContainer">
              
         
            {players.map((player, key) => (
              <Users handleChange={handleChange} key={key} player={player} />
              ))}


          </div>

          <h1> Game Settings </h1>

          <div className="GameSettingsContainer">

            <GameSettings numOfGames={numOfGames} numOfSets={numOfSets} SettingGames={SettingGames} SettingSets={SettingSets} />

            <div>
              {numOfSets}
            </div>
          </div>

        </div>}
    </>
  )
}

export default Menu

// See what is active when game start, then send that data.

// Conditional render game on start click, use game page as a component

// Take note of memory stack, back button etc (also for game component)

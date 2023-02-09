import { Calculator, Scoreboard } from './components'

import React, { useState, useEffect } from 'react'

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50, 'Double', 'Triple', 'Miss', 'Remove', 'Add']

var clicks = 0
var turn = 0
var players = [{ id: 0, name: 'Liam', score: 501 }, { id: 1, name: 'Jade', score: 501 }, {id: 2, name: 'Paul', score: 501 }, { id: 3, name: 'Dave', score: 501 }]
const App = () => {
  const [score, setScore] = useState({data: 0})


  const SettingTurn = () => {
    
    if (clicks % (3 * players.length) === 0) {
      turn = 0
      clicks = 0
    }
    else if (clicks % 3 === 0 && clicks > 2){
      turn++
    }else{
      turn = turn
    }
  }



  const stuff = (value) => {
    if (typeof (value) === "string") {
      console.log("Adding/Removing/Miss Or Triple/Double")
    }
    else {
      setScore({data: value})
      players[turn] = {...players[turn],
                  score: players[turn].score - score.data }
      SettingTurn()
      clicks++
      
    }



  }

  return (
    <>
      <div className='ScoreboardContainer'>
        {players.map((player) => (

        <Scoreboard active={turn == player.id} player={player} score={score.data} />
        ))}

      </div>
      <div className='CalcContainer'>

        {values.map((value) => (
          <Calculator key={value} stuff={stuff} number={value} score={players} />
        )
        )}


      </div>
      {/* <div>
      <button onClick={() => {setGame(true)}}>Start!</button>
    </div> */}
    </>


  )
}


export default App

import { Calculator, Scoreboard } from '../../components'

import React, { useState, useEffect } from 'react'
const outs =
  [[170, "T20", "T20", 50], [167, "T20", "T19", 50], [164, "T20", "T18", 50],
  [161, "T20", "T17", 50], [160, "T20", "T20", "D20"], [158, "T20", "T20", "D19"],
  [157, "T20", "T19", "D20"], [156, "T20", "T20", "D18"], [155, "T20", "T19", "D19"],
  [154, "T20", "T18", "D20"], [153, "T20", "T19", "D18"], [152, "T20", "T20", "D16"],
  [151, "T20", "T17", "D20"], [150, "T20", "T18", "D18"], [149, "T20", "T19", "D16"],
  [148, "T20", "T20", "D14"], [147, "T20", "T17", "D1"], [146, "T20", "T18", "D16"],
  [145, "T20", "T19", "D14"], [144, "T20", "T20", "D12"], [143, "T19", "T18", "D16"],
  [142, "T20", "T14", "D20"], [141, "T20", "T19", "D12"], [140, "T20", "T20", "D10"],
  [139, "T19", "T14", "D20"], [138, "T20", "T18", "D12"], [137, "T20", "T19", "D10"],
  [136, "T20", "T20", "D8"], [135, "T20", "T17", "D12"], [134, "T20", "T14", "D16"],
  [133, "T20", "T19", "D8"], [132, "T20", "T16", "D12"], [131, "T20", "T13", "D16"],
  [130, "T20", "T18", "D8"], [129, "T19", "T16", "D12"], [128, "T18", "T14", "D16"],
  [127, "T20", "T17", "D8"], [126, "T19", "T15", "D12"], [125, "T18", "T13", "D16"],
  [124, "T20", "T16", "D8"], [123, "T19", "T14", "D12"], [122, "T18", "T18", "D7"],
  [121, "T20", "T11", "D14"], [120, "T20", "S20", "D20"], [119, "T19", "T12", "D13"],
  [118, "T20", "S18", "D20"], [117, "T20", "S17", "D20"], [116, "T20", "S16", "D20"],
  [115, "T19", "S18", "D20"], [114, "T20", "S14", "D20"], [113, "T19", "S16", "D20"],
  [112, "T20", "T12", "D8"], [111, "T19", "S14", "D20"], [110, "T20", "S10", "D20"],
  [109, "T20", "S9", "D20"], [108, "T19", "S19", "D16"], [107, "T20", "S15", "D16"],
  [106, "T20", "S6", "D20"], [105, "T19", "S8", "D20"], [104, "T20", "T12", "D4"],
  [103, "T17", "S12", "D20"], [102, "T20", "S10", "D16"], [101, "T17", "S10", "D20"],
  [100, "T20", "D20"], [99, "T19", "S10", "D16"], [98, "T20", "D19"],
  [97, "T19", "D20"], [96, "T20", "D18"], [95, "T19", "D19"],
  [94, "T18", "D20"], [93, "T19", "D18"], [92, "T20", "D16"],
  [91, "T17", "D20"], [91, "T17", "D20"], [89, "T19", "D16"],
  [88, "T16", "D20"], [87, "T17", "D18"], [86, "T18", "D16"],
  [85, "T15", "D20"], [84, "T20", "D12"], [83, "T17", "D16"],
  [82, "T14", "D20"], [81, "T19", "D12"], [80, "T20", "D10"],
  [79, "T13", "D20"], [78, "T18", "D12"], [77, "T15", "D16"],
  [76, "T20", "D8"], [75, "T17", "D12"], [74, "T14", "D16"],
  [73, "T19", "D8"], [72, "T16", "D12"], [71, "T13", "D16"],
  [70, "T18", "D8"], [69, "T19", "D6"], [68, "T20", "D4"],
  [67, "T17", "D8"], [66, "T14", "D12"], [65, "T19", "D4"],
  [64, "T16", "D8"], [63, "T13", "D12"], [62, "T10", "D16"],
  [61, "T15", "D8"], [60, "S20", "D20"], [59, "S19", "D20"],
  [58, "S18", "D20"], [57, "S17", "D20"], [56, "T16", "D4"],
  [55, "S15", "D20"], [54, "S14", "D20"], [53, "S12", "D20"],
  [52, "S12", "D20"], [51, "S11", "D20"], [50, "S10", "D20"],
  [49, "S9", "D20"], [48, "S8", "D20"], [47, "S15", "D16"],
  [46, "S14", "D16"], [45, "S13", "D16"], [44, "S12", "D16"],
  [43, "S11", "D16"], [42, "S10", "D16"], [41, "S9", "D16"],
  [39, "S7", "D16"], [37, "S5", "D16"], [35, "S3", "D16"],
  [33, "S1", "D16"], [31, "S7", "D12"], [29, "S13", "D8"],
  [27, "S11", "D8"], [25, "S9", "D8"], [23, "S7", "D8"],
  [21, "S5", "D8"], [19, "S3", "D8"], [17, "S13", "D2"],
  [15, "S7", "D4"], [13, "S5", "D4"], [11, "S3", "D4"],
  [9, "S1", "D4"], [7, "S3", "D2"], [5, "S1", "D2"],
  [3, "S1", "D1"]]


const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50, 'Double', 'Triple', 'Miss', 'Remove', 'Add']
var starting = 0
var clicks = 0
var multiplier = 1
var players = [{ id: 0, name: 'Liam', score: 200, finish: 'n/a', legs: 0 }, { id: 1, name: 'Jade', score: 200, finish: 'n/a', legs: 0 }, { id: 2, name: 'Paul', score: 200, finish: 'n/a', legs: 0 }, { id: 3, name: 'Dave', score: 200, finish: 'n/a', legs: 0 }]
const Game = () => {
  const [score, setScore] = useState({ data: 0 })
  const [turn, setTurn] = useState({ data: 0 })
  var end = 0


  useEffect(() => {
    console.log("resetting")
    multiplier = 1
  }, players)

  useEffect(() => {
    SettingTurn()
  }, [score])

  useEffect(() => {
    starting = players[turn.data].score
    console.log("running")
  }, [turn])

  const LessThan40 = (x) => {
    players[x] = {
      ...players[x],
      finish: ("D" + players[x].score / 2)
    }
  }

  const checkVal = (val) => {
    for (let i = 0; i < outs.length; i++) {
      if (val === outs[i][0]) {
        end = outs[i].slice(1)
        players[turn.data] = {
          ...players[turn.data],
          finish: end
        }
        console.log(players[turn.data])
        return (true)
      }

    }
    console.log("made it")
    players[turn.data] = {
      ...players[turn.data],
      finish: "n/a"
    }
  }



  const SettingTurn = () => {

    if (turn.data === (players.length - 1) && clicks > 2) {
      setTurn({ data: 0 })
      clicks = 0
      console.log(turn)



    }
    else if (clicks > 2) {
      setTurn({ data: turn.data + 1 })
      clicks = 0

    }
  }

  const WinCheck = (val, mult) => { //This is why it doesn't work, finish the win check and all will work
    console.log("checking Win")
    if (players[val].score === 0 && mult === 2){
          
      
        
        console.log("winner")
        players[turn.data].legs = players[turn.data].legs + 1
      // This function works... need to create new function that resets the game and set correct person first.
            
    }
    else if (players[val].score <= 1) {
      clicks = 0
      console.log(starting)
      players[turn.data] = {
        ...players[turn.data],
        score: starting
      }
      checkVal(players[turn.data].score)
      if (turn.data === players.length - 1) {
        setTurn({ data: 0 })
      } else {

        setTurn({ data: turn.data + 1 })
      }
    }

  }

  const stuff = (value) => {
    clicks++
    if (typeof (value) === "string") {

      if (value === 'Double') {
        multiplier = 2
        clicks--
      } else if (value === 'Triple') {
        multiplier = 3
        clicks--
      } else {
        setScore({ data: value })
      }

    }
    else {
      console.log("hit" + clicks)
      setScore({ data: value })

      players[turn.data] = {
        ...players[turn.data],
        score: players[turn.data].score - (value * multiplier)
      }
      if (players[turn.data].score <= 40 && players[turn.data].score % 2 === 0) {
        LessThan40(turn.data)
      }
      else if ((players[turn.data].score) < 170) {
        checkVal(players[turn.data].score)
      }
      WinCheck(turn.data, multiplier)
      multiplier = 1

    }



  }

  return (
    <>
      <div className='ScoreboardContainer'>
        {players.map((player) => (

          <Scoreboard end={end} turn={turn} player={player} score={score} />

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


export default Game

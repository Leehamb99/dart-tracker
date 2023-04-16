import { Calculator, Scoreboard, BackButton } from '../../components'
import axios from 'axios'

import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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


const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50, 'Double', 'Triple', 'Miss']
var starting = 0
let clicks = 0
var multiplier = 1
var firstplayer = 0
var players = []
var started = false
let instance = []
let shots = []
let newTurn



const Game = () => {
  

  const [score, setScore] = useState({ data: 0 })
  const [turn, setTurn] = useState({ data: 0 })
  const location = useLocation()

  let numOfGames = location.state.numOfGames
  let numOfSets = location.state.numOfSets
  let selectedPlayers = location.state.selectablePlayers


  const navigate = useNavigate()



  if (!started) {
    started = true
    for (let i = 0; i < selectedPlayers.length; i++) {
      
      if (selectedPlayers[i].active) {
        players.push({ id: i, name: selectedPlayers[i].name, score: 501, finish: 'n/a', legs: 0, games: 0, darts: 0, total: 0, last_3: [] })
      }
      else {
        i--
      }
    }
    }

    const Subtractor = (x) => {
      console.log(shots)
      console.log(turn.data)
      console.log(clicks)
      let temp_shot = shots.pop()
      console.log(shots)
      setScore({ data: temp_shot })


        players[turn.data] = {
          ...players[turn.data],
          score: players[turn.data].score + temp_shot,
          darts: players[turn.data].darts - 1,
          total: players[turn.data].total - temp_shot
      }
      players[turn.data].last_3.pop()

    }
    
const Undo = () => {
  console.log(clicks)
  if (turn.data === 0 && clicks === 0){
    
    setTurn({data: players.length - 1})
    clicks = 2
  }
  else if(clicks === 0){

    setTurn({data: turn.data - 1})
    clicks = 2

  
  }else{
    clicks--
    Subtractor()
  }


  

}
  

  for (let i = 0; i < players.length; i++) {


    instance[i] = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`access_token${i+1}`)}` // loop here through access tokens `access_token${i}`
      },
      baseURL: 'https://darts-backend-production.up.railway.app/edit/',
      method: 'PATCH',
      timeout: 5000
    })
  }






  var end = 0
  var target = { sets: numOfSets, games: numOfGames }



  useEffect(() => {
    console.log("resetting")
    multiplier = 1
    // eslint-disable-next-line
  }, players)

  useEffect(() => {
    SettingTurn()
    // eslint-disable-next-line
  }, [score])

  useEffect(() => {
    if (clicks === 2){
      Subtractor()
    }else{

      starting = players[turn.data].score
      console.log("running")
      players[turn.data].last_3.length = 0
    }
  }, [turn] )

  const LessThan40 = (x) => {
    players[x] = {
      ...players[x],
      finish: ("D" + players[x].score / 2)
    }
  }

  const endGame = () => {
    navigate("/Postgame", { state: { players }})
  }
  const ResetGame = async () => {
    firstplayer++
    clicks = 0
    if (firstplayer === players.length) {
      firstplayer = 0
    }
    for (let i = 0; i < players.length; i++) {
      await instance[i].request({
        data: {
          score: players[i].total,
          darts_thrown: players[i].darts
        }
      })
      if (players[i].games === target.games) {
        console.log("Ending Game")
        endGame()
        break;
      }
      else{

        players[i] = {
          ...players[i],
          score: 501,
          finish: 'n/a',
          darts: 0,
          total: 0
        }
      }



    }
    setTurn({ data: firstplayer })
  }

  const checkVal = (val) => {
    for (let i = 0; i < outs.length; i++) {
      if (val === outs[i][0]) {
        end = outs[i].slice(1)
        players[turn.data] = {
          ...players[turn.data],
          finish: end
        }

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



    }
    else if (clicks > 2) {

      setTurn({ data: turn.data + 1 })
      clicks = 0

    }
  }

  const WinCheck = async (val, mult, score) => {


    if (players[val].score === 0 && mult === 2 || players[val].score === 0 && score === 50) {

      if ((players[turn.data].legs + 1) == target.sets) {
        players[turn.data] = {
          ...players[turn.data],
          games: players[turn.data].games + 1,
          legs: 0
        }
        if ((players[turn.data].games == target.games)){
          endGame()
        }
      } 
      else{

        console.log("winner", players[turn.data].name)
        players[turn.data] = {
          ...players[turn.data],
          legs: players[turn.data].legs + 1
        }
      }



      ResetGame()

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
        setScore({ data: 0 })
        players[turn.data] = {
          ...players[turn.data],
          darts: players[turn.data].darts + 1
        }
        players[turn.data].last_3.push(0)

      }

    }
    else {

      if (value > 20) {
        multiplier = 1
      }
      shots.push(value * multiplier)
      console.log("hit" + clicks)
      setScore({ data: value })

      players[turn.data] = {
        ...players[turn.data],
        score: players[turn.data].score - (value * multiplier),
        darts: players[turn.data].darts + 1,
        total: players[turn.data].total + (value * multiplier),
      }
      players[turn.data].last_3.push(value * multiplier)
      if (players[turn.data].score <= 40 && players[turn.data].score % 2 === 0) {
        LessThan40(turn.data)
      }
      else if ((players[turn.data].score) < 170) {
        checkVal(players[turn.data].score)
      }
      WinCheck(turn.data, multiplier, value)
      multiplier = 1

    }
    


  }

  return (
    <>
      <div className='flex flex-col justify-start items-center  bg-[#F9DFBC] h-screen'>

      <BackButton Undo={Undo} />

        <div className='w-screen flex justify-between'>
          {players.map((player) => (

            <Scoreboard end={end} turn={turn} player={player} score={score} />



          ))}

        </div>
        <div className='flex grow'>

        <div className='grid grid-cols-5 w-screen text-center'>

          {values.map((value) => (
            <Calculator key={value} stuff={stuff} number={value} score={players} />
            )
            )}


        </div>
            </div>
          
      </div>
    </>


  )
}


export default Game

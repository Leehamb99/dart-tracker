import React, { useEffect } from 'react'
import { useState } from 'react';

import { Games, Users, GameSettings } from '../../components'


import axios from 'axios';

import { useNavigate } from "react-router-dom";




const games = ["501"]



const Menu = () => {

  const [selectablePlayers, SetselectablePlayers] = useState([])
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()
  

  const navigate = useNavigate()

  let url = "https://darts-backend-production.up.railway.app/user/"

  const getData = async (x) => {
    let res = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem(`access_token${selectablePlayers.length + 1}`)}`
      }
    })
    let raw = await res.data
    let player_data = raw.player
    let friends_data = raw.related_players // left off here
    if (x === "first"){

      let newVal = { id: player_data.id, name: player_data.username, active: false, score: 101, darts: player_data.darts_thrown, avg: (player_data.score / (player_data.darts_thrown / 3)).toFixed(1), games_played: player_data.games_played, games_won: player_data.games_won }
      console.log(newVal)
      console.log("first render")
      SetselectablePlayers([newVal])
      for (let i = 0; i < friends_data.length; i++) { 
        let newVal = { id: friends_data[i].id, name: friends_data[i].username, active: false, score: 101, darts: friends_data[i].darts_thrown, avg: (friends_data[i].score / (friends_data[i].darts_thrown / 3)).toFixed(1), games_played: friends_data[i].games_played, games_won: friends_data[i].games_won }
        SetselectablePlayers(selectablePlayers => [...selectablePlayers, newVal])
      }
    }




    

    

    
    console.log(selectablePlayers)
  }

  useEffect(() => {
    getData("first")
  }, [])

  const handleNewLogin = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post('https://darts-backend-production.up.railway.app/adduser/', {
        username: username,
        password: password
      } , {

        headers: {
          'Authorization': `Bearer ${localStorage.getItem(`access_token1`)}`
        }
      }
      );
      let data = await res.data
      console.log(data)
      // console.log(selectablePlayers.length + 1)
      // localStorage.setItem(`access_token${selectablePlayers.length + 1}`, data.access);
      

      // getData()

    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };


  const StartGame = () => {
    return(

      navigate("/Game", { state: { numOfGames, numOfSets, selectablePlayers }})

      )
    }



  const [numOfGames, setNumOfGames] = useState(0)
  const [numOfSets, setNumOfSets] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [adding, setAdding] = useState(false)


  const AddUser = () => {
    setAdding(true)

  }

  const handleChange = (x, y) => {
    console.log("changing ", x)
    setClicks(clicks + 1)
    console.log(selectablePlayers)

    if (clicks >= 0) {
      let newData = selectablePlayers
      newData[x].active = !newData[x].active

      SetselectablePlayers(newData)

    } else {

      SetselectablePlayers[x] = {
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





  return (
    <>

      <div className='flex flex-col justify-start items-center  bg-[#309F6A] h-screen'>

         
          
            <div className="flex flex-col items-center bg-[#309F6A] rounded">

              <div className="flex flex-row items-center justify-center">
                {games.map((game, key) => (
                  <Games key={key} name={game} />
                ))}

              </div>

              <h2> Users </h2>

              <div className="flex flex-col items-center bg-[#309F6A] ">

                {selectablePlayers && selectablePlayers.map((player, index) => (
                  <Users handleChange={handleChange} key={index} index={index} player={player} />
                ))}

                {adding ? (

                  <form onSubmit={handleNewLogin}>
                    <label htmlFor="Username">Username</label>
                    <input
                      type="username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                  </form>




                ) : (

                  <button className="m-2 p-6 max-w-sm mx-auto rounded-xl shadow-lg bg-[#F9DFBC] flex flex-col items-center justify-center space-x-4 hover:outline-none hover:border-4  hover:border-[#F9DFBC]" onClick={() => AddUser()}> Add User </button>
                )
                }






              </div>

              <h1> Game Settings </h1>

              <div className="flex justify-center">

                <GameSettings numOfGames={numOfGames} numOfSets={numOfSets} SettingGames={SettingGames} SettingSets={SettingSets} />
                
              </div>
              <button className="m-2 p-6 max-w-sm mx-auto rounded-xl shadow-lg bg-[#F9DFBC] flex flex-col items-center justify-center space-x-4 hover:outline-none hover:border-4  hover:border-[#F9DFBC]" onClick={() => StartGame()}> Start </button>
            </div>
      </div>
    </>
  )
}

export default Menu

// See what is active when game start, then send that data.

// Conditional render game on start click, use game page as a component

// Take note of memory stack, back button etc (also for game component)

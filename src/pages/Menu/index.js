import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Games, Users, GameSettings } from '../../components'
import { Game } from '../../pages'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Login } from '../../pages'




const games = ["501", "301", "101", "Around The World", "Profiles"]




const Menu = () => {




  let url = "http://localhost:8000/user/"

  let reqInstance = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
  }
  )



  const [selectablePlayers, SetselectablePlayers] = useState([])
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()

  const getData = async () => {
    const res = await reqInstance.get(url)
    const data = await res.data
    console.log(data)
    let newVal = { id: data.id, name: data.username, active: false, score: 501, darts: data.darts_thrown, avg: (data.score / (data.darts_thrown / 3)).toFixed(1) }
    console.log(newVal)
    SetselectablePlayers(selectablePlayers => [...selectablePlayers, newVal])
    console.log(selectablePlayers)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleNewLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: username,
        password: password
      });
      console.log(response.data)
      localStorage.setItem(`access_token${selectablePlayers.length + 1}`, response.data.access);
      
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };





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
      {numOfGames && numOfSets ? (

        <Game numOfGames={numOfGames} numOfSets={numOfSets} players={selectablePlayers} />

      )
        :
        (
          <div className="MenuContainer">

            <div className="GameContainer">
              {games.map((game, key) => (
                <Games key={key} name={game} />
              ))}

            </div>

            <h2> Users </h2>




            <div className="UserContainer">







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

                <Button onClick={() => AddUser()}> Add User </Button>
              )
              }






            </div>

            <h1> Game Settings </h1>

            <div className="GameSettingsContainer">

              <GameSettings numOfGames={numOfGames} numOfSets={numOfSets} SettingGames={SettingGames} SettingSets={SettingSets} />

              <div>
                {numOfSets}
              </div>
            </div>

          </div>)}
    </>
  )
}

export default Menu

// See what is active when game start, then send that data.

// Conditional render game on start click, use game page as a component

// Take note of memory stack, back button etc (also for game component)

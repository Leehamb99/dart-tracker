import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const GameSettings = ({SettingGames, SettingSets}, props) => {
  const xs = [1,2,3,4,5]
  const ys = [3,5,7,9,11]
  return (
    <>
      <Dropdown >
        <Dropdown.Toggle id="DARKBUTTON"variant="dark">
            Games
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
        {xs.map((x, key) => (
            <Dropdown.Item key={key} onClick={() => SettingGames(x)}>
              {x}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="dark">
        Sets
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
        {ys.map((y, key) => (
            <Dropdown.Item key={key} onClick={() => SettingSets(y)}>
              {y}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

    </>
    
  )
}

export default GameSettings


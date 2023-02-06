import { Calculator, Scoreboard} from './components'

import React from 'react'

const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,50,'Double','Triple','Miss','Remove','Add']

const App = () => {
  return ( 

    <>
    <div className='ScoreboardContainer'>
      <Scoreboard players={players}/>
    </div>
    <div className='CalcContainer'>

      {values.map((value) => (
        <Calculator key={value} number={value} />
        )
        )}
    
    </div>
      </>
    
      )
} 

export default App

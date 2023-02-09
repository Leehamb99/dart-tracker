import React from 'react'

const Calculator = ({number, stuff}) => {


    return(
        
        <button onClick={() => stuff(number)} className='CalcButton'> {number} </button>
        )
}

export default Calculator

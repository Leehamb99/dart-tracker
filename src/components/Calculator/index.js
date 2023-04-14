import React from 'react'

const Calculator = ({number, stuff}) => {


    return(


        <button className="text-center m-1 bg-green-700 active:bg-red-900 text-white font-bold rounded" onClick={() => stuff(number) }> {number} </button>


        )
    }

export default Calculator

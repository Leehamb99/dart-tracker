import React from 'react'

const Calculator = (props) => {
    let clicks = 0
    let players = ['Liam','Jade','Dave','John']
    const Stuff = (value) => {
        if (typeof(value) === "string"){
            console.log("Adding/Removing/Miss Or Triple/Double")
        }
        else{
            console.log(value)
        }


    }
    return(
        
        <button onClick={() => Stuff(props.number)} className='CalcButton'> {props.number} </button>
        )
}

export default Calculator

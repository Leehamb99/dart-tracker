import React, { useEffect, useState } from 'react'


const Calculator = ({number, stuff, activeMulti}, props) => {
    console.log(activeMulti)
    return(

            

        <button  className={`${ activeMulti.data == number ? 'flex grow items-center justify-center text-center border border-red border-collapse bg-[#E3292E] text-white fs-5' : 'flex grow items-center justify-center text-center border border-red border-collapse bg-green-700 active:bg-[#E3292E] text-white fs-5 font-bold'}`} onClick={() => [stuff(number) ]}> {number} </button>
            


        )
    }

export default Calculator

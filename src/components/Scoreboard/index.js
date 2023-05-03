import React, { useEffect, useRef } from 'react'


const Scoreboard = (props) => {
    const idRef = useRef(null)

    useEffect(() => {
        if (props.turn.data === props.player.id)
        idRef.current.scrollIntoView({
            behavior: 'smooth'
        })

    })

    return (
        <>

            <div ref={idRef} className={props.turn.data === props.player.id ? "flex-none w-1/2 bg-[#309F6A] flex flex-col items-center" : "flex-none w-1/2 bg-[#E3292E] flex flex-col items-center"}>
                <h2 className='text-white bold'>

                    {props.player.name}

                </h2>
                <h2 className='text-white bold'>
                    {props.player.score}



                </h2>

                <h1 className='text-white bold'>
                    {props.player.finish}
                </h1>
                <div className='text-white bold'>
                    Legs : {props.player.legs}
                </div>
                <h2 className='text-white bold'>
                    Last 3 : {props.player.last_3.map(score => {
                        return (score + " ")
                    })}
                </h2>
                <div className='text-white bold'>
                    Average : {(props.player.total / (props.player.darts / 3)).toFixed(1)}
                </div>
            </div>
        </>
    )
}
export default Scoreboard

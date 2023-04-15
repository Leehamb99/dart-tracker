import React from 'react'


const Scoreboard = (props) => {

    return (
        <>

            <div className={props.turn.data === props.player.id ? "w-screen bg-[#309F6A] flex flex-col items-center" : "w-screen bg-[#E3292E] flex flex-col items-center"}>
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

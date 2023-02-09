import React from 'react'
import { useState } from 'react'

const Scoreboard = (props) => {
    return (
        <>
            
                <div className='ScoreboardItem'>
                    <div >
                        {props.active ? "Me " : "Not Me "}

                        {props.player.name}
                
                    </div>
                    <div>
                        {props.active ? props.player.score - props.score : props.player.score}
                       


                    </div>

                </div>

            

        </>

    )
}

export default Scoreboard

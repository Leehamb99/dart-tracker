import React from 'react'


const Scoreboard = (props) => {
    
    return (
        <>
            
                <div className='ScoreboardItem'>
                    <div >
                        {props.turn.data === props.player.id ? "Me " : "Not Me "}

                        {props.player.name}
                
                    </div>
                    <div>
                        {props.player.score}

                    
        
                    </div>

                    <div>
                        {props.player.finish}
                    </div>
                    <div>
                        Legs : {props.player.legs}
                    </div>

                </div>

            

        </>

    )
    
}

export default Scoreboard

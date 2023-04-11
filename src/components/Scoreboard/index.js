import React from 'react'


const Scoreboard = (props) => {
    
    console.log(props.player.legs)
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
                    <div>
                        Last 3 : {props.player.last_3.map(score => {
                            return(score+" ")
                        })}
                    </div>
                    <div>
                        Average : {(props.player.total / (props.player.darts / 3)).toFixed(1)}
                    </div>

                </div>

            

        </>

    )
    
}

export default Scoreboard

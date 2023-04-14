import React from 'react'

const PostGameBox = (props) => {
  return (

    <div className='text-white flex flex-col w-screen h-screen items-center justify-center p-2'>
        <h1 className='p-1'>{props.player.name} </h1>

        <h2 className='p-1'>
            Average : {props.player.total / props.player.darts * 3}
        </h2>

        <h2 className='p-1'> Games : {props.player.games}</h2>



    </div>

  )
}

export default PostGameBox

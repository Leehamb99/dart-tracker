import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { PostGameBox } from '../../components'

const PostGame = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const stats = location.state.players
  return (
    <div className='flex flex-col w-screen h-screen bg-[#309F6A]'>
        <button onClick={() => navigate('/menu') }> Menu </button>
    {stats.map((player, key) => {
        return(
            
            <PostGameBox player={player} />
            )
    })}
    </div>
  )
}

export default PostGame;

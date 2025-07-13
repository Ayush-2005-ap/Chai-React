import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-sky-400 text-cyan-900  rounded-xl p-5' > 
      User: {userid}
    </div>
  )
}

export default User

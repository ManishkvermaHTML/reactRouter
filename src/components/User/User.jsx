import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-slate-500 text-3xl text-white text-center p-4 w-80 mx-auto rounded-lg'>User : {userId} </div>
  )
}

export default User
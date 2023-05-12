import React from 'react'
import Avatar from 'react-avatar'

const Client = ( {username}) => {
    console.log({username});
  return (
    <div className='lines Client'>
        <Avatar name={username} size={50} round='14px'/>
        <span className='username'>{username}</span>
    </div>
  )
}

export default Client
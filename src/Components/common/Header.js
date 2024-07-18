import React, { useState } from 'react'

const Header = ({user,setUser}) => {

  return (
    <div>
      Welcome, {user}!
      <button onClick={()=> setUser("")}>Logout</button>
    </div>
  )
}

export default Header

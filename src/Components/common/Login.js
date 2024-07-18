import React, { useState } from 'react'

const Login = ({setUser}) => {
    const [username,setUsername] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser(username);
    }
  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
    <input 
        type='text'
        placeholder='please enter users name'
      onChange={event=>setUsername(event.target.value)}
    />
    <button>Submit</button>
      </form>
    </div>
  )
}

export default Login

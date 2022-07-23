import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'


// styles
import './Login.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, isPending, error} = useLogin(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    login(email, password)
  }
 
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input type="email" required onChange={(e) => setEmail(e.target.value)} value={email}/>
      </label>
      <label>
        <span>password:</span>
        <input type="password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
      </label>
      
      {!isPending && <button className='btn'>Log in</button>}
      {isPending && <button className='btn' disabled>loading...</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

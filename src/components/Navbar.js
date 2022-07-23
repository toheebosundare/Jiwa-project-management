import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'



export default function Navbar() {
  const {logout, isPending} = useLogout

  

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='dojo logo'></img>
          <span>The Dojo</span>
        </li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li>
          {!isPending && <button className='btn' onClick={logout}>logout</button>}
          {isPending && <button className='btn' disabled>logging out...</button>}
        </li>
      </ul>
    </div>
  )
}
 
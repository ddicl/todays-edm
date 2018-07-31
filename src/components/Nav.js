import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper blue-grey darken-4'>
          <Link to='/' className='brand-logo center'>
            <span>TODAYS&rsquo; EDM</span>
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><Link to='/music'>Music</Link></li>
            <li><Link to='/playlist'>Playlists</Link></li>
            <li><Link to='/news'>News</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

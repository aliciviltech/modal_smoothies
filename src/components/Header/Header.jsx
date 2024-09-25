import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className="logo">
            <img src="/asset/images/logo.png" alt="" />
        </div>

        <div className="anchors">
        <a href="">Home</a>
        <a href="">Specialities</a>
        <a href="">About</a>
        <a href="">Contact us</a>
        </div>
    </div>
  )
}

export default Header
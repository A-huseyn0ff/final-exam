import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <header>
        <img src="https://preview.colorlib.com/theme/eatwell/images/bg_3.jpg" alt="" />
        <div className='txt'>
            <h2>Welcome To EatWell</h2>
            <p>Come and eat well with our delicious & healthy foods.</p>
            <a href="">Reservation</a>
        </div>
    </header>
  )
}

export default Header
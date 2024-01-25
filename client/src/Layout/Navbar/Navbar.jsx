import React, { useContext, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { wishlistContext } from '../../context/wishlist'
import { basketContext } from '../../context/basket'

const Navbar = () => {
  const [isopen, setisopen] = useState(false)
  const {wishlist} =useContext(wishlistContext)
  const {basket}=useContext(basketContext)
  function handleopen() {
   if (isopen) {
    setisopen(true)
   }
   else{
    setisopen(false)
   }
  }
  return (
    <nav>
        <div className='nav_container'>
            <h2>EATWELL</h2>
            <ul className='navlink'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/add'}>Admin</Link></li>
                <li>Offer</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <ul>
              
                <li className='basket'><Link to={'/basket'}><i className="fa-solid fa-basket-shopping"></i></Link><span>{basket.length}</span></li>
                <li className='wishlist'><Link to={'/wishlist'}><i className="fa-solid fa-heart"><span>{wishlist.length}</span></i></Link></li>
                <li className='HAMBURGER' onClick={()=>handleopen()}><i className="fa-solid fa-bars"></i>MENU</li>
            </ul>
        </div>
        <div className={`${isopen}`? 'active':'dropdown'}>
        <ul className='dropdown_nav'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/add'}>Admin</Link></li>
                <li>Offer</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            

          
              
                <li><Link to={'/basket'}><i className="fa-solid fa-basket-shopping"></i><span>{basket.length}</span></Link></li>
                <li><Link to={'/wishlist'}><i className="fa-solid fa-heart"></i></Link></li>
                </ul>
           
        </div>
    </nav>
  )
}

export default Navbar
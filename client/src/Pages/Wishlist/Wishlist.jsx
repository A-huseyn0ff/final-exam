import React, { useContext } from 'react'
import { wishlistContext } from '../../context/wishlist'
import { basketContext } from '../../context/basket'
import './wishlist.scss'
const Wishlist = () => {
  const {wishlist,deletefromwishlist}=useContext(wishlistContext)
  const {addtobasket}=useContext(basketContext)
  return (
    <section className='wishlist'>
     
     <div className='container'>
     <h2>My Wishlist</h2>
      <div className='product_row'>
{wishlist && wishlist.map(item=>(
  <div className='col' key={item._id}>
    <img src={item.image} alt="" />
    <h1>{item.name}</h1>
    <p>${item.price}</p>
    <h5>{item.title}</h5>
    <div className='btn'>
      <button onClick={()=>deletefromwishlist(item._id)}><i class="fa-solid fa-heart-crack"></i></button>
      <button onClick={()=>addtobasket(item)}>Offer product</button>
    </div>
  </div>
  
))}
</div>
     </div>
    </section>
  )
}

export default Wishlist
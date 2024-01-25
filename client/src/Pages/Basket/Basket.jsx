import React, { useContext } from 'react'
import { basketContext } from '../../context/basket'
import './Basket.scss'
import Helmet from 'react-helmet'
const Basket = () => {
    const {basket,deletefrombasket,SubTotal,modifycount}=useContext(basketContext)
  return (
    <>
    <Helmet>
      <title>Basket</title>
    </Helmet>
    <section className='basket'>
        <div className='basket_container'>
          <h2>My Basket</h2>
            <div className='row'>
            {basket && basket.map(item=>(
              <>
              <div className='col' key={item._id}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <h4>{item.title}</h4>
                <div className='counter'>
                  <button onClick={()=>modifycount(item,true)}>+</button>
{item.count}
                  <button onClick={()=>modifycount(item,false)}>-</button>
                </div>
<button onClick={()=>deletefrombasket(item._id)}><i class="fa-solid fa-trash"></i></button>


              </div>
              
              </>
            ))}
            </div>
            <span>SubTotal:{SubTotal}</span>
        </div>
    </section>
    </>
  )
}

export default Basket
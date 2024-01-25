import React, { useContext, useEffect, useState } from 'react'
import './OurOffers.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { basketContext } from './../../context/basket';
import { Link } from 'react-router-dom';
import { wishlistContext } from '../../context/wishlist';
const OurOffers = () => {
    const {addtobasket}=useContext(basketContext)
    const {addtowishlist}=useContext(wishlistContext)
    const [data, setdata] = useState([])
    const fetchdata=async()=>{
        const res=await axios.get('http://localhost:4000/product')
        setdata(res.data)
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
   <section className='offers'>
    <div className='offers_container'>
        <div className='txt'>
            <p>OUR OFFERS</p>
            <h2>Our Offer This Summer</h2>
            <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1360: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
{data && data.map(item=>(
     <SwiperSlide className='col' key={item._id}>
        <img src={item.image} alt="" />
        <p>${item.price}</p>
        <h1>{item.name}</h1>
        <h4>{item.title}</h4>
        <div className='btn'>
     <Link to={`/detail/${item._id}`}> <i className="fa-solid fa-eye"></i></Link>
      <button onClick={()=>addtowishlist(item)}><i className="fa-regular fa-heart"></i></button>
      </div>
<button onClick={()=>addtobasket(item)} className='basket_btn'>Offer Now!</button>

     </SwiperSlide>
))}
    {data && data.map(item=>(
     <SwiperSlide className='col' key={item._id}>
        <img src={item.image} alt="" />
        <p>${item.price}</p>
        <h1>{item.name}</h1>
        <h4>{item.title}</h4>
      <div className='btn'>
      <Link to={`/detail/${item._id}`}> <i className="fa-solid fa-eye"></i></Link>
      <button onClick={()=>addtowishlist(item)}><i className="fa-regular fa-heart"></i></button>
      </div>
<button onClick={()=>addtobasket(item)} className='basket_btn'>Offer Now!</button>
     </SwiperSlide>
))}    
      </Swiper>
    </div>
   </section>
  )
}

export default OurOffers
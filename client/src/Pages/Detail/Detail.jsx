import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Detail.scss'
import Helmet from 'react-helmet'
const Detail = () => {
    const {id}=useParams()
    const [detail, setdetail] = useState([])
    const fetchdetail=async()=>{
const res=await axios.get(`http://localhost:4000/product/${id}`)
setdetail(res.data)
    }

    useEffect(()=>{
        fetchdetail()
    },[])
  return (
    <>
    
    
    <section className='detail'>
        <div className='detail_con'>
            {detail ?  <> <Helmet>
      <title>{detail.name}</title>
    </Helmet><div className='col'>
               
               
                <img src={detail.image} alt="" />
                <h2>{detail.name}</h2>
                <h4>{detail.title}</h4>
                <p>${detail.price}</p>

            </div> </>: <></>}
        </div>
    </section>
    </>
  )
}

export default Detail
import React from 'react'
import './News.scss'
const News = () => {
  return (
    <section className='news'>
        <div className='news_container'>
            <div className='txt'>
                <h3>News</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            </div>
            <div className='row'>
              <div className='col'>
              <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg" alt="" />
                <h2>We Have Dilecious Food</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="">Read More</a>
              </div>
              <div className='col'>
              <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg" alt="" />
                <h2>We Have Dilecious Food</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="">Read More</a>
              </div>
              <div className='col'>
              <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg" alt="" />
                <h2>We Have Dilecious Food</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="">Read More</a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default News
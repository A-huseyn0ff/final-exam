import React from 'react'
import './gallery.scss'
const Gallery = () => {
  return (
    <section className='gallery'>
        <div className='gallery_container'>
            <div className='txt'>
                <h1>Gallery</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            </div>
            <div className='product_row'>
             
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                   
                
            </div>
        </div>
    </section>
  )
}

export default Gallery
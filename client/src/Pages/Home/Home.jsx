import React from 'react'
import Header from '../../components/Header/Header'
import OurStory from '../../components/OurStory/OurStory'
import OurOffers from '../../components/OurOffers/OurOffers'
import News from '../../components/News/News'
import Helmet from 'react-helmet'
import Gallery from '../../components/Gallery/Gallery'
const Home = () => {
  return (
    <>
     <Helmet>
      <title>Home</title>
    </Helmet>
    <Header></Header>
    <OurStory></OurStory>
    <OurOffers></OurOffers>
    <News></News>
    <Gallery></Gallery>
    </>
  )
}

export default Home
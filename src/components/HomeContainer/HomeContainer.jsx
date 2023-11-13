import React from 'react'
import { Element } from 'react-scroll'
import HomeContent from './HomeContent'

const HomeContainer = () => {
  return (
    <Element name="home" className="homeContainer">
      <HomeContent />
    </Element>
  )
}

export default HomeContainer
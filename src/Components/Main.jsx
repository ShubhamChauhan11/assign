import React from 'react'
import * as Styled from "./Styles"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Pricing from './Pricing'
import Review from "./Review"
import Fotter from './Fotter'
import GetStarted from './GetStarted'

function Main() {
  return (
    <div >
    
    <Styled.Main>
    <Navbar/>
    <Home/>
    <About/>
    <Pricing/>
    <Review/>
    <GetStarted/>
    <Fotter/>
    
    </Styled.Main>

      
    </div>
  )
}

export default Main

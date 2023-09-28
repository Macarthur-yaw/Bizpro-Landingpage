import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Navbar/Home'
import Process from './Navbar/Process'
import About from './Navbar/About'
import Services from './Navbar/Services'
import Communication from './Navbar/Communication'
import Enquiry from './Navbar/Enquiry'
import Footer from './Navbar/Footer'
import {Element} from 'react-scroll'
function App() {
  return (
    <>
      <div className='flex flex-col gap-20'>
  <Element name='Home'>
  <Home />
    
  </Element>
  
  <Element name='Process'>
  <Process/>
    
  </Element>

  <Element name='About'>
  <About />
    
  </Element>

  <Element name='Services'>
  <Services />
    
  </Element>

  <Element name='Communication'>
  <Communication/>
    
  </Element>

  <Element name='Enquiry'>
  <Enquiry />
    
  </Element>

  <Element name='Footer'>
     <Footer id='Footer'/>
     </Element>
      </div>
    </>
  )
}
export default App


import './App.css'
import Home from './Pages/Home'
import Process from './Pages/Process'
import About from './Pages/About'
import Services from './Pages/Services'
import Communication from './Pages/Communication'
import Enquiry from './Pages/Enquiry'
import Footer from './Pages/Footer'
import {Element} from 'react-scroll'
import { createContext, useState } from 'react'

const OverLayContext=createContext();

function App() {
const [disp,setDisp]=useState(false);

  return (
    <>
      <div className='flex flex-col gap-20'>
<OverLayContext.Provider value={{disp,setDisp}}>
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
     </OverLayContext.Provider>
      </div>
    </>
  )
}
export default App
export {OverLayContext};

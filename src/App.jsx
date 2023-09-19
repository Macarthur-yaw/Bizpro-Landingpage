import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Navbar/Home'
import Process from './Navbar/Process'
import About from './Navbar/About'
import Services from './Navbar/Services'
import Communication from './Navbar/Communication'
function App() {
  return (
    <>
      <div className='flex flex-col gap-20'>
     <Home/>
     <Process/>
     <About/>
     <Services/>
     <Communication/>
      </div>
    </>
  )
}
export default App

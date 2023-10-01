import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import { motion,useAnimation } from 'framer-motion';
import {Link} from 'react-scroll'
function Navbar(){
const[display,setDisplay]=useState(false)
const controls=useAnimation()
const hideVar={
    hidden:{
        x:'-100%'
    },
    show:{
        opacity:1,x:"0"
    }
}
const showMenu=()=>{
    setDisplay(!false)
    controls.start('show')
}
const hideMenu=()=>{
    setDisplay(!true)
    controls.start("hidden")
}
    return (
        <div className="border-2 w-[1170px] max-md:w-[100%] max-md:p-2  h-[100px] max-md:h-[20%] max-md:rounded-none shadow-md mx-auto items-center   p-6  rounded-[10px] flex flex-row justify-between  bg-white border-white text-indi max-md:rounded-sm
        
        "> 
          <div className=''>
<span>         <h1 className="max-md:text-[10px] font-bold text-[30px] 

">  Bizpro</h1>
</span>

            </div> 
            <div>
           {display ? (   <motion.ul 
           initial="hidden"
      variants={hideVar}
           animate={display? 'show':'hidden'}
           transition={{
duration:3
           }
           }
           
           className="flex flex-col gap-4 text-[20px] bg-black text-white h-[300vh] w-[100vw] p-4 left-0 top-0 bottom-0 z-10 absolute   ">
                   <FaTimes onClick={hideMenu}/>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                       <Link to="Home" spy={true} mdooth={true} duration={500} > Home</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="About" spy={true} mdooth={true} duration={500} > About</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Process" spy={true} mdooth={true} duration={500} > Services</Link>
                  
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Services" spy={true} mdooth={true} duration={500} > Reviews</Link>
                  
                   </li>

<li className="hover:text-lightblue-200 cursor-pointer">
<Link to="Enquiry" spy={true} mdooth={true} duration={500} > Support</Link>
              
    </li>

                </motion.ul>):(   <ul className="flex flex-row gap-4 text-[14px] max-md:hidden ">
                    <li className="hover:text-lightblue-200 cursor-pointer">
                       <Link to="Home" spy={true} mdooth={true} duration={500} > Home</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="About" spy={true} mdooth={true} duration={500} > About</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Process" spy={true} mdooth={true} duration={500} > Services</Link>
                  
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Services" spy={true} mdooth={true} duration={500} > Reviews</Link>
                  
                   </li>

<li className="hover:text-lightblue-200 cursor-pointer">
<Link to="Enquiry" spy={true} mdooth={true} duration={500} > Support</Link>
              
    </li>

                </ul>)}

                <FaBars onClick={showMenu} className='max-md:block hidden'/>
            </div>

            <div className="flex flex-row gap-2 max-md:hidden">
                <button className="border-2 text-indi border-white rounded-md p-4 w-[120px] h-[55px] max-md:w-[50%] max-md:p-2">Sign in</button>
                <button className="border-2 border-indi bg-indi text-white rounded-md p-4 bg-indigo w-[120px] h-[55px] max-md:w-[50%]">Free trial</button>
            </div>
        </div>
    )
}
export default Navbar;
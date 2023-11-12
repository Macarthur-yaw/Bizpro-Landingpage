import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-scroll'
import { easeInOut, motion,useAnimation } from 'framer-motion';
import { OverLayContext } from '../App';
function Navbar(){
const {disp,setDisp}=useContext(OverLayContext)
function handleClick(e){
    e.stopPropagation();

}
    return (
      <div onClick={disp ? null: handleClick}  className={` border-2 p-4  w-[100%]   h-[20%]  shadow-md md:mx-auto items-center md:p-6 md:rounded-[10px] flex flex-row justify-between bg-white border-white text-indi`}>

          <div className=''>
<span>         <h1 className="font-bold md:text-[32px] 

">  Bizpro</h1>
</span>

            </div> 
         
       {
        disp && (  
        <motion.div 
        initial={{x:'80vw',opacity:0}}
animate={{x:0,opacity:1}}
exit={{x:'80vw',opacity:0}}
transition={{duration:0.5,ease:easeInOut}}

        className=' border-2 flex w-[40%] flex-col bg-white text-black shadow-md fixed z-20  right-0 top-0 h-[100vh] items-center border-white justify-between'>
     
        <div>
                <ul className="flex flex-col py-20 gap-16 md:text-[14px] text-sm ">
        
                       <li className="hover:text-lightblue-200 cursor-pointer">
                          <Link to="Home" spy={true} smooth={true} duration={500} > Home</Link>
                       </li>
                       <li className="hover:text-lightblue-200 cursor-pointer">
                       <Link to="About" spy={true} smooth={true} duration={500} > About</Link>
                       </li>
                       <li className="hover:text-lightblue-200 cursor-pointer">
                       <Link to="Process" spy={true} smooth={true} duration={500} > Services</Link>
                     
                       </li>
                       <li className="hover:text-lightblue-200 cursor-pointer">
                       <Link to="Services" spy={true} smooth={true} duration={500} > Reviews</Link>
                     
                      </li>
   
   <li className="hover:text-lightblue-200 cursor-pointer">
   <Link to="Enquiry" spy={true} smooth={true} duration={500} > Support</Link>
                 
       </li>
   
                   </ul>
   
                   {/* <FaBars onClick={showMenu} className='sm:block hidden'/> */}
               </div>
   
               <div className="flex flex-row gap-2 ">
                   <button className="border-2 text-indi border-white rounded-md p-4  md:h-[55px] md:w-[100px] bg-white md::p-2">Sign in</button>
                   <button className="border-2 border-indi bg-indi text-white rounded-md p-4 bg-indigo  md:h-[55px] md:w-[80%]">Free trial</button>
               </div>
               </motion.div>)
       }  
            <div className=' hidden md:block'>
     
     <div>
             <ul className="flex flex-row gap-4 md:text-[14px] text-sm ">
     
                    <li className="hover:text-lightblue-200 cursor-pointer">
                       <Link to="Home" spy={true} smooth={true} duration={500} > Home</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="About" spy={true} smooth={true} duration={500} > About</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Process" spy={true} smooth={true} duration={500} > Services</Link>
                  
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Services" spy={true} smooth={true} duration={500} > Reviews</Link>
                  
                   </li>

<li className="hover:text-lightblue-200 cursor-pointer">
<Link to="Enquiry" spy={true} smooth={true} duration={500} > Support</Link>
              
    </li>

                </ul>

                {/* <FaBars onClick={showMenu} className='sm:block hidden'/> */}
            </div>

            <div className="flex flex-row gap-2 ">
                <button className="border-2 text-indi border-white rounded-md p-4  md:h-[55px] md:w-[100px] md::p-2">Sign in</button>
                <button className="border-2 border-indi bg-indi text-white rounded-md p-4 bg-indigo  md:h-[55px] md:w-[80%]">Free trial</button>
            </div>
            </div>
     <div > 
            <div  onClick={()=>setDisp(true)} className='p-6 cursor-pointer md:hidden border-2 rounded-full bg-gray-200 border-gray-200' >
<FaBars />
            </div>
            </div> </div>
    )
}
export default Navbar;
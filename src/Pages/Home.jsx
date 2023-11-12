import Navbar from "./Navbar";
import Body from "./Body";
import {motion,useAnimation} from 'framer-motion'
// import { useInView } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import { useContext, useEffect,useState } from "react";
import { OverLayContext } from "../App";

const Home = () => {
    const controls=useAnimation();
    const[ref,inView]=useInView()
const {disp,setDisp}=useContext(OverLayContext)
    
    const bodyControls={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                duration:1.2
            }
        }
    }
    useEffect(()=>{
        if(inView){
            controls.start("visible")
        }
        else{
            controls.start("hidden")
        }
    },[inView,controls])

    return ( 

        <div onClick={()=>setDisp(false)} className={`flex flex-col  md:p-10 md:py-6  bg-[#ECF9FF]`} style={{backgroundColor:""}}>
            <div className="md:p-4 ">
            <Navbar />


            </div>

<div className={`${disp ? 'bg-black bg-opacity-40 w-full h-screen fixed z-10':''}`}>

</div>

            <motion.div
            ref={ref} 
            variants={bodyControls}
            animate={controls}
            className="p-4">
<Body id='Home'/>
            </motion.div>
  
        </div>
      
     );
}
 
export default Home;
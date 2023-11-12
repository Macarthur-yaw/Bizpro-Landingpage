import Navbar from "./Navbar";
import Body from "./Body";
import {motion,useAnimation} from 'framer-motion'
// import { useInView } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";

const Home = () => {
    const controls=useAnimation();
    const[ref,inView]=useInView()

    
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

        <div className="flex flex-col  p-10 py-6 " style={{backgroundColor:"#ECF9FF"}}>
            <div className="p-4 ">
            <Navbar/>


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
import Navbar from "./Navbar";
import Body from "./Body";
import {motion,useAnimation} from 'framer-motion'
// import { useInView } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import { useEffect,useState } from "react";

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
const[dispValue,setDispValue]=useState(null)
    function handleChange(data){
setDispValue(data)
    }
    useEffect(()=>{
console.log('ejeje');

    },[])
    return ( 

        <div className={`flex flex-col  md:p-10 md:py-6 ${dispValue ? 'bg-black bg-opacity-10':''}`} style={{backgroundColor:"#ECF9FF"}}>
            <div className="md:p-4 ">
            <Navbar handleChange={handleChange}/>


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
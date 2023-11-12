import aboutPicture from '../assets/About.png'
import Shield from '../assets/shield.svg'
import Rating from '../assets/rating.svg'
import Charts from '../assets/Frame 13.png'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react'

export default function About(){
const controls=useAnimation();

const [ref,inView]=useInView();

useEffect(()=>{
if(inView){
    controls.start("visible");
}
else{
    controls.start("hidden");
}

},[controls,inView])
    const initialAnimate={
        hidden:{
            opacity:0,
        
            
        },
        visible:{
            opacity:1,
            
            transition:{
                duration:1.01
            }
        }

    }

    const imageAnimate={
        hidden:{
            opacity:0,
            x:"100%"
        },
        visible:{
            opacity:1,
            x:"0%",
            transition:{duration:1.01}

        }
    }
    return (
        <div className='flex md:flex-row  flex-col p-16  gap-10 md:items-center justify-between'>
    < motion.div
    animate={controls}
    ref={ref} 
    variants={initialAnimate}
    initial="hidden"
    
    className='flex flex-col md:w-1/3 gap-4 md:gap-[12px] items-center'>       
<div
id="mainHeader">
    <h1 className='md:text-[45px] font-bold text-indi'>
        About us
    </h1>
</div>

<div id="subHeader" className='md:text-[16px] text-sm text-[#9090A7]  md:w-[431px]'>
No wonder that promotion strategy is one of the most important processes in marketing.
In fact, it supports your marketing voices to reach your target audience, creates interest, and helps you to engage with them.

</div>


<div className='flex flex-col gap-4 items-center'>
<div id="itemOne " className='flex flex-row  items-center gap-4'>

{/* <Shield/> */}
    <img src={Shield} alt='an svg icon of a shield' className='border-2 border-[#ECF9FF] md:w-30 md:h-30 p-4 rounded-md bg-[#ECF9FF]'/>
<div id='itemText' className='flex flex-col gap-1'>
    <h1 className='md:text-lg font-semibold text-[14px]'>Safe and Safeguard</h1>

<h3 className='text-[#9090A7] md:text-md text-[12px]'>Safe and secured promotion strategy is one of the most important processes in marketing.
</h3>
</div>
</div>


<div id="itemTwo " className='flex flex-row items-center gap-4'>

{/* <Shield/> */}
    <img src={Rating} alt='an svg icon of a rating' className='border-2 border-[#ECF9FF] md:w-30 md:h-30 p-4 rounded-md bg-[#ECF9FF]'/>
<div id='itemText' className='flex flex-col gap-1'>
    <h1 className='md:text-lg font-semibold text-[14px]'>Highly expert team</h1>

<h3 className='text-[#9090A7] text-md text-[12px]'>We supports your marketing voices to reach your target audience, creates interest.

</h3>
</div>
</div>


</div>
</motion.div> 


<div id="aboutPicture">
<motion.img 
ref={ref}
variants={imageAnimate}
animate={controls}
initial="hidden"
src={aboutPicture} alt='a description of an about picture' className=' rounded-lg'/>
<img src={Charts} alt='chart ' className='md:absolute md:left-[38%] md:top-[265vh] md:block hidden'/>
</div>
</div>

    )

}
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
        <div className='flex flex-row p-16 items-center justify-between'>
    < motion.div
    animate={controls}
    ref={ref} 
    variants={initialAnimate}
    initial="hidden"
    
    className='flex flex-col w-1/3 gap-[12px] '>       
<div
id="mainHeader">
    <h1 className='text-[45px] font-bold text-indi'>
        About us
    </h1>
</div>

<div id="subHeader" className='text-[16px] text-[#9090A7] w-[431px]'>
No wonder that promotion strategy is one of the most important processes in marketing.
In fact, it supports your marketing voices to reach your target audience, creates interest, and helps you to engage with them.

</div>


<div className='flex flex-col'>
<div id="itemOne " className='flex flex-row items-center gap-4'>

{/* <Shield/> */}
    <img src={Shield} alt='an svg icon of a shield' className='border-2 border-[#ECF9FF] w-30 h-30 p-4 rounded-md bg-[#ECF9FF]'/>
<div id='itemText' className='flex flex-col gap-1'>
    <h1 className='text-lg font-semibold'>Safe and Safeguard</h1>

<h3 className='text-[#9090A7] text-md'>Safe and secured promotion strategy is one of the most important processes in marketing.
</h3>
</div>
</div>


<div id="itemTwo " className='flex flex-row items-center gap-4'>

{/* <Shield/> */}
    <img src={Rating} alt='an svg icon of a rating' className='border-2 border-[#ECF9FF] w-30 h-30 p-4 rounded-md bg-[#ECF9FF]'/>
<div id='itemText' className='flex flex-col gap-1'>
    <h1 className='text-lg font-semibold'>Highly expert team</h1>

<h3 className='text-[#9090A7] text-md'>We supports your marketing voices to reach your target audience, creates interest.

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
<img src={Charts} alt='chart ' className='absolute left-[38%] top-[265vh]'/>
</div>
        </div>
    )

}
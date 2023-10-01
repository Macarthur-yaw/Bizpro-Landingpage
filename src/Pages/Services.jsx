import ServiceCard from "../Cards/ServiceCard";
import imageOne from '../assets/image 55.png'
import imageTwo from '../assets/image 65.png'
import imageThree from '../assets/image 66.png'
import  {FaGreaterThan,FaLessThan} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Services = () => {
    return (

        <div className="p-8 flex flex-col gap-8 bg-[#ECF9FF] h-[781px]">

<div className="flex flex-row w-full  justify-between">
    <h1 className="text-[45px] p-4 font-bold text-[#060640]">Popular packages</h1>

<span className="w-[126px] h-[66px] p-[8px] gap-[10px] items-start flex flex-row justify-center border-2 rounded-[10px] bg-white border-white">
    <button className="w-[50px] h-[50px] p-[13px] rounded-md">
        <FaLessThan/>
      
    </button>

    <button className="border-2 w-[50px] p-[13px] h-[50px] bg-[#00E5CC] border-[#00E5CC] text-white p-6 rounded-md">  <FaGreaterThan/></button>

    </span>
</div>
<div className="flex flex-row gap-[30px] justify-between p-8">
<motion.div
      initial={{scale:1}}
      whileHover={{scale:1.1}}
      transition={{duration: 0.5}}>
<ServiceCard imgPath={imageOne}  />
</motion.div>

<motion.div
      initial={{scale:1}}
      whileHover={{scale:1.1}}
      transition={{duration: 0.5}}>
<ServiceCard imgPath={imageTwo}  />
</motion.div>

<motion.div
      initial={{scale:1}}
      whileHover={{scale:1.1}}
      transition={{duration: 0.5}}>
<ServiceCard imgPath={imageThree}  />
</motion.div>
</div>
        </div>
      );
}
 
export default Services;
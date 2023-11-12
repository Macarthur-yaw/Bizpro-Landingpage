import ServiceCard from "../Cards/ServiceCard";
import imageOne from '../assets/image 55.png'
import imageTwo from '../assets/image 65.png'
import imageThree from '../assets/image 66.png'
import  {FaGreaterThan,FaLessThan} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Services = () => {
    return (

        <div className="p-8 flex flex-col gap-8 bg-[#ECF9FF] md:h-[781px]">

<div className="flex flex-row w-full  justify-between">
    <h1 className="md:text-[45px] text-[20px] p-4 font-bold text-[#060640]">Popular packages</h1>

<span className="md:w-[126px] md:h-[66px] gap-4 md:p-[8px] md:gap-[10px] items-start flex flex-row justify-center border-2 rounded-[10px] bg-white border-white">
    <button className="md:w-[50px] w-[30%] p-6 md:h-[50px] md:p-[13px] rounded-md">
        <FaLessThan/>
      
    </button>

    <button className="border-2 md:w-[50px] w-[44%] md:p-[13px] md:h-[50px] bg-[#00E5CC] border-[#00E5CC] text-white p-6 rounded-[10px]">  <FaGreaterThan/></button>

    </span>
</div>
<div className="flex flex-row md:gap-[30px] gap-4 justify-between md:p-8">
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
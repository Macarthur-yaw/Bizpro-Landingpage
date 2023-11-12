import faPackage from '../assets/box.png'
import faStatistics from '../assets/statistics.png'
import  FaCalendar  from '../assets/calendar.png'
import {FaGift,FaCalendarCheck,FaChartBar} from 'react-icons/fa'
const Process = () => {
    return ( 
        <div className='flex flex-col gap-[70px] p-4 '>
            <div id="header" className='flex flex-col items-center gap-[12px]  '>
<h1 className='font-bold md:text-[45px] text-[20px] leading-[55px]'>
How it works.
</h1>
<div className='text-[#9090A7] md:text-[16px] md:w-[431px] text-center'>
    Business generally promote the brand,products and services by adding audiences.
</div>



            </div>

<div id="boxes" className='flex md:flex-row flex-col justify-around p-2 gap-[30px]'>

<div id="Package" className=' shadow-md   md:w-[370px] md:h-[308px] flex flex-col gap-4  p-[30px] rounded-[14px]'>
<div className='border-2 border-[#ECF9FF] md:w-[70px] w-fit p-2 md:h-[70px] rounded-[10px]  bg-[#ECF9FF]'>
<img src={faPackage} className='md:w-[40px] md:h-[40px]  mx-auto mt-2'/>
</div>
<div className='flex flex-col gap-[10px]'>
<h1 className='md:text-[24px] font-semibold text-[#060640]'>Choose Package</h1>

<h3 className='md:text-[16px] text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>
</div>



<div id="Package" className=' shadow-md   md:w-[370px] md:h-[308px]  p-[30px] rounded-[14px] flex flex-col gap-4'>
<div className='border-2 w-fit p-2 border-[#ECF9FF] bg-[#ECF9FF] md:w-[70px] md:h-[70px] rounded-[10px] '>
<img src={FaCalendar} className='md:w-[40px] md:h-[40px] mx-auto mt-2'/>
</div>
<div className='flex flex-col gap-[10px]'>
<h1 className='md:text-[24px] font-semibold text-[#060640]'>Schedule Appointment</h1>

<h3 className='md:text-[16px] text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>
</div>



<div id="Package" className=' shadow-md md:w-[370px] md:h-[308px]  p-[30px] rounded-[14px] flex flex-col gap-4'>

<div className='border-2 w-fit p-2 border-[#ECF9FF] bg-[#ECF9FF] md:w-[70px] md:h-[70px] rounded-[10px] '>
<img src={faStatistics} className='md:w-[40px] md:h-[40px] mx-auto mt-2'/>
</div>
<div className='flex flex-col gap-[10px]'>


<h1 className='md:text-[24px] font-semibold text-[#060640]'>Grow together</h1>

<h3 className='md:text-[16px] text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>
</div>

</div>
</div>
        // </div>
     );
}
 
export default Process;
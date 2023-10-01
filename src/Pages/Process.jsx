import faPackage from '../assets/box.png'
import faStatistics from '../assets/statistics.png'
import  FaCalendar  from '../assets/calendar.png'
import {FaGift,FaCalendarCheck,FaChartBar} from 'react-icons/fa'
const Process = () => {
    return ( 
        <div className='flex flex-col gap-[70px] '>
            <div id="header" className='flex flex-col items-center gap-[12px]  '>
<h1 className='font-bold text-[45px] leading-[55px]'>
How it works.
</h1>
<div className='text-[#9090A7] text-[16px] w-[431px] text-center'>
    Business generally promote the brand,products and services by adding audiences.
</div>



            </div>

<div id="boxes" className='flex flex-row justify-around p-2 gap-[30px]'>

<div id="Package" className=' shadow-md   w-[370px] h-[308px] flex flex-col gap-4  p-[30px] rounded-[14px]'>
<div className='border-2 border-[#ECF9FF] w-[70px] h-[70px] rounded-[10px]  bg-[#ECF9FF]'>
<img src={faPackage} className='w-[40px] h-[40px]  mx-auto mt-2'/>
</div>
<div className='flex flex-col gap-[10px]'>
<h1 className='text-[24px] font-semibold text-[#060640]'>Choose Package</h1>

<h3 className='text-[16px] text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>
</div>



<div id="Package" className=' shadow-md   w-[370px] h-[308px]  p-[30px] rounded-[14px] flex flex-col gap-4'>
<div className='border-2 border-[#ECF9FF] bg-[#ECF9FF] w-[70px] h-[70px] rounded-[10px] '>
<img src={FaCalendar} className='w-[40px] h-[40px] mx-auto mt-2'/>
</div>
<div className='flex flex-col gap-[10px]'>
<h1 className='text-[24px] font-semibold text-[#060640]'>Schedule Appointment</h1>

<h3 className='text-[16px] text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>
</div>



<div id="Package" className=' shadow-md w-[370px] h-[308px]  p-[30px] rounded-[14px] flex flex-col gap-4'>

<div className='border-2 border-[#ECF9FF] bg-[#ECF9FF] w-[70px] h-[70px] rounded-[10px] '>
<img src={faStatistics} className='w-[40px] h-[40px] mx-auto mt-2'/>
</div>
<div className='flex flex-col gap-[10px]'>


<h1 className='text-[24px] font-semibold text-[#060640]'>Grow together</h1>

<h3 className='text-[16px] text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>
</div>

</div>
</div>
        // </div>
     );
}
 
export default Process;
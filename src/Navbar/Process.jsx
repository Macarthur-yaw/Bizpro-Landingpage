import {FaGift,FaCalendarCheck,FaChartBar} from 'react-icons/fa'
const Process = () => {
    return ( 
        <div>
            <div id="header" className='flex flex-col items-center gap-16 '>
<h1 className='font-semibold text-7xl'>
How it works.
</h1>
<div>
    Business generally promote the brand,products and services by adding audiences.
</div>

<div  id='subabout'>


            </div>

<div id="boxes" className='flex flex-row justify-between  gap-6 p-8'>

<div id="Package" className=' shadow-md  h-66 w-96 flex flex-col gap-4  p-4 '>

<FaGift className='text-4xl'/>
<h1 className='text-2xl font-semibold'>Choose Package</h1>

<h3 className='text-lg text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>



<div id="Package" className=' shadow-md  h-60 w-96  p-4 gap-6'>

<FaCalendarCheck className='text-4xl'/>
<h1 className='text-2xl font-semibold'>Schedule Appointment</h1>

<h3 className='text-lg text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>



<div id="Package" className=' shadow-md  h-60 w-96  p-4 gap-4'>

<FaChartBar className='text-4xl'/>
<h1 className='text-2xl font-semibold'>Grow together</h1>

<h3 className='text-lg text-[#9090A7]'>Business generally promote their brand,products and services by identifying the audiences or users.</h3>
</div>

</div>
</div>
        </div>
     );
}
 
export default Process;
import {FaPlayCircle,FaQuoteRight,FaStar} from 'react-icons/fa'
import Background1 from "../assets/Happy.png"
import handEmoji from '../assets/peace-removebg-preview.png'
import Side1 from "../assets/Frame 11.png"
import Side2 from "../assets/Frame 12.png"
import Side3 from "../assets/Frame 9.png"
import Side4 from "../assets/Ellipse 11.png"

const Body = () => {
    return ( 
        <div className="flex md:flex-row flex-col py-20   gap-4 items-center justify-around ">
          <div className="flex flex-col gap-4 text-indi  md:w-1/3  md:h-full ">
<span className='inline-block'>
    
<h1 className=" text-indi font-bold md:text-[50px]  text-[14px]">Perfect place for your business promotion
</h1>
{/* <img src={handEmoji} alt='peace symbol' className='w-8 h-8 inline mr-4' /> */}

</span>
<h3 className="text-sm text-[#9090A7] md:text-[16px]">
Businesses generally promote their brand, products, and services by identifying audience.

</h3>


<span className="flex flex-row gap-2 items-center">
    <button className="border-2 text-sm rounded-md p-4 bg-indi md:w-[150px] md:h-[60px] text-white  border-indi">Get Started</button>
    <button className="border-2 rounded-full bg-white md:w-[60px] md:h-[60px] border-white p-2 text-lightblue-200 "><FaPlayCircle className='md:text-5xl text-lg' /></button>
</span>

<div id="comments" className="border-2 hidden md:block text-indi md:w-84 shadow-sm p-2 bg-white rounded-[14px] md:w-[418px] md:h-[136px]  border-none backdrop-blur-[5px]">
<span id="headers" >
    <ul className="flex flex-row w-full justify-between items-center md:p-4 p-2">
        <li className='text-lightblue-200'><FaQuoteRight className='text-2xl w-[32px] h-[32px] text-[#00E5CC]'/></li>
        <li className='text-sm flex flex-row items-center gap-2'><FaStar className='text-gold '/>4.99</li>
    </ul>
</span>
<div className='text-[#9090A7] md:text-[14px] text-sm'>
There’s no shortage of ideas, what’s missing is the 
will to execute them – Seth Godin
</div>
</div>

          </div>

<div>

<img src={Side1} alt='side one' className='md:absolute hidden md:block max-w-[20%] left-[40vw]  md:w-[20%] top-[40vh] md:left-1/3 '/>

<img src={Side2} alt='side two'className='md:absolute hidden md:block top-[70vh] md:right-10 right-0 max-w-[20%] md:w-[20%]' />

<img src={Side3} alt='side three'className='md:absolute md:left-[55%] md:top-[82vh] max-w-[20%] left-[5vw] top-[82vh] hidden md:block ' />

<img src={Background1} alt="welcome"  className="md:w-full " />
</div>

        </div>
     );
}
 
export default Body;

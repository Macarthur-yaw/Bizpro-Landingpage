import {FaPlayCircle,FaQuoteRight,FaStar} from 'react-icons/fa'
import Background1 from "../assets/Happy.png"
import handEmoji from '../assets/peace-removebg-preview.png'
import Side1 from "../assets/Frame 11.png"
import Side2 from "../assets/Frame 12.png"
import Side3 from "../assets/Frame 9.png"
import Side4 from "../assets/Ellipse 11.png"

const Body = () => {
    return ( 
        <div className="flex flex-row gap-4 items-center justify-around ">
          <div className="flex flex-col gap-4 text-indi  w-1/3  h-full ">
<span className='inline-block'>
    
<h1 className=" text-indi font-bold text-[50px] max-sm:text-[12px] max-sm:hidden ">Perfect place for your business promotion
</h1>
{/* <img src={handEmoji} alt='peace symbol' className='w-8 h-8 inline mr-4' /> */}

</span>
<h3 className="text-sm text-[#9090A7] text-[16px]">
Businesses generally promote their brand, products, and services by identifying audience.

</h3>


<span className="flex flex-row gap-2 items-center">
    <button className="border-2 rounded-md p-2 bg-indi w-[150px] h-[60px] text-white p-4 border-indi">Get Started</button>
    <button className="border-2 rounded-full bg-white w-[60px] h-[60px] border-white p-2 text-lightblue-200 "><FaPlayCircle className='text-5xl ' /></button>
</span>

<div id="comments" className="border-2 text-indi w-84 shadow-sm p-2 bg-white rounded-[14px] w-[418px] h-[136px]  border-none backdrop-blur-[5px]">
<span id="headers" >
    <ul className="flex flex-row w-full justify-between items-center p-4">
        <li className='text-lightblue-200'><FaQuoteRight className='text-2xl w-[32px] h-[32px] text-[#00E5CC]'/></li>
        <li className='text-sm flex flex-row items-center gap-2'><FaStar className='text-gold '/>4.99</li>
    </ul>
</span>
<div className='text-[#9090A7] text-[14px]'>
There’s no shortage of ideas, what’s missing is the 
will to execute them – Seth Godin
</div>
</div>

          </div>

<div>

<img src={Side1} alt='side one' className='absolute top-[40vh] left-1/3'/>

<img src={Side2} alt='side two'className='absolute top-1/2 right-10' />

<img src={Side3} alt='side three'className='absolute left-[55%] top-[82vh]' />

<img src={Background1} alt="welcome"  className="w-full" />
</div>

        </div>
     );
}
 
export default Body;

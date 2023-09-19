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
    
<h1 className=" text-indi font-bold text-6xl  ">Perfect place for your business promotion
</h1>
{/* <img src={handEmoji} alt='peace symbol' className='w-8 h-8 inline mr-4' /> */}

</span>
<h3 className="text-sm">
Businesses generally promote their brand, products, and services by identifying audience.

</h3>


<span className="flex flex-row gap-2 items-center">
    <button className="border-2 rounded-md p-2 bg-indi text-white p-4 border-indi">Get Started</button>
    <button className="border-2 rounded-full bg-white w-8 h-8 border-white p-2 text-lightblue-200"><FaPlayCircle/></button>
</span>

<div id="comments" className="border-2 text-indi w-84 shadow-sm p-2 bg-white rounded-md w-96  border-none">
<span id="headers" >
    <ul className="flex flex-row w-full justify-between items-center p-4">
        <li className='text-lightblue-200'><FaQuoteRight/></li>
        <li className='text-sm flex flex-row items-center gap-2'><FaStar className='text-gold '/>4.99</li>
    </ul>
</span>

There’s no shortage of ideas, what’s missing is the 
will to execute them – Seth Godin
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

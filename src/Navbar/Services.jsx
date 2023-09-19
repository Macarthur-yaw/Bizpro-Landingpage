import ServiceCard from "../Cards/ServiceCard";
import imageOne from '../assets/image 55.png'
import imageTwo from '../assets/image 65.png'
import imageThree from '../assets/image 66.png'
import  {FaGreaterThan,FaLessThan} from 'react-icons/fa'
const Services = () => {
    return (

        <div className="p-8 flex flex-col gap-8 bg-[#ECF9FF]">

<div className="flex flex-row w-full  justify-between">
    <h1 className="text-5xl p-4 text-semibold">Popular packages</h1>

<span className="flex flex-row w-30 gap-2 p-2 rounded-md bg-white border-white p-4">
    <button className=" p-4 rounded-md">
        <FaLessThan/>
      
    </button>

    <button className="border-2 bg-[#00E5CC] border-[#00E5CC] text-white p-6 rounded-md">  <FaGreaterThan/></button>

    </span>
</div>
<div className="flex flex-row gap-4 justify-between">
<ServiceCard imgPath={imageOne}  />
<ServiceCard imgPath={imageTwo}  />
<ServiceCard imgPath={imageThree}  />
</div>
        </div>
      );
}
 
export default Services;
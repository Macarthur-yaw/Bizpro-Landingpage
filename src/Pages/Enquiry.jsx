import Picture from '../assets/university-study-abroad-lifestyle-concept-satisfied-happy-asian-male-student-glasses-shirt-showing-thumbs-up-approval-likes-studying-college-holding-laptop-backpack 1.png'
const Enquiry = () => {
    return ( 
        <div className="border-2  mx-auto border-[#ECFDFF] md:w-[1170px] md:h-[370px] rounded-[17px] bg-[#ECFDFF] p-4">
            
<div className='flex flex-row'>            
<div id="newsLetter" className="flex flex-col gap-6 px-8 py-10">
<div id="text">
<h1 className="md:text-[45px] font-semibold text-[#060640]">
    Subscribe to our newsletter
</h1>
<h3 className="text-[#9090A7] text-sm md:text-[16px] md:w-[668px]">
Businesses generally promote their brand, products, and services by identifying audience. No wonder that promotion strategy is one of the most important processes in marketing.

</h3>
</div>
{/* width: 600px; */}
{/* height: 78px; */}
<div id="inputSection" className="md:w-[600px] md:h-[78px] flex flex-row items-center rounded-[6px] border-2 border-white w-fit ">

<input type="text" placeholder="Enter your email here" className=" md:w-[690px] md:h-full text-[16px] px-6"/>

<input type="submit"  className="block text-sm md:absolute p-4 left-[42%] md:h-[60px] py-2 rounded-[6px] bg-[#060640] text-white text-center text-[14px] md:w-[150px] cursor-pointer w-[20%]"/>
</div>
</div>

<div>
    <img src={Picture} className='w-[353px] h-[436px] absolute top-[542.5vh]'/>
</div>
        </div>
        </div>
 );
}
 
export default Enquiry;
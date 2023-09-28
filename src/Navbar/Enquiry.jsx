import Picture from '../assets/university-study-abroad-lifestyle-concept-satisfied-happy-asian-male-student-glasses-shirt-showing-thumbs-up-approval-likes-studying-college-holding-laptop-backpack 1.png'
const Enquiry = () => {
    return ( 
        <div className="border-2  mx-auto border-[#ECFDFF] w-[1170px] h-[370px] rounded-[17px] bg-[#ECFDFF] p-4">
            
<div className='flex flex-row'>            
<div id="newsLetter" className="flex flex-col gap-6 px-8 py-10">
<div id="text">
<h1 className="text-[45px] font-semibold text-[#060640]">
    Subscribe to our newsletter
</h1>
<h3 className="text-[#9090A7] text-[16px] w-[668px]">
Businesses generally promote their brand, products, and services by identifying audience. No wonder that promotion strategy is one of the most important processes in marketing.

</h3>
</div>
{/* width: 600px; */}
{/* height: 78px; */}
<div id="inputSection" className="w-[600px] h-[78px] flex flex-row items-center rounded-[6px] border-2 border-white ">

<input type="text" placeholder="Enter your email here" className=" w-[690px] h-full text-[16px] px-6"/>

<input type="submt" value="Subscribe" className=" absolute left-[42%] h-[60px] py-2 rounded-[6px] bg-[#060640] text-white text-center text-[14px] w-[150px] cursor-pointer"/>
</div>
</div>

<div>
    <img src={Picture} className='w-[353px] h-[436px] absolute top-[557.5vh]'/>
</div>
        </div>
        </div>
 );
}
 
export default Enquiry;
import {motion} from 'framer-motion'

const ServiceCard = (props) => {

    return ( 

           <div className="border-[1px]  rounded-[14px] hover:bg-white cursor-pointer flex flex-col border-white items-start md:h-[436px] md:w-[370px] ">
            <div
            className="p-2">

         <img src={props.imgPath} alt="welcome" className="rounded-md md:w-[613px] "/>
            </div>
            <div className=" p-4">
              
              <div className="md:text-[20px] font-semibold text-[12px]">  
                
                The premium package to boost your promotion.
              </div>
                <div id="users" className="flex flex-row justify-between w-full p-2">

                  <h2 className="text-[10px] font-semibold">
                  99k+ users 
                  </h2>


<h2 className="font-semibold text-[#00E5CC] text-[10px]">
$140.00

</h2>

                </div>
            </div>
        </div>
  
          
   );
}
 
export default ServiceCard;
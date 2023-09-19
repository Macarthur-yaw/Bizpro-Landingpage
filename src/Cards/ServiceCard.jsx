const ServiceCard = (props) => {

    return ( 
        <div className="border-2   rounded-md  flex flex-col border-white items-center ">
            <div className="p-2">

<img src={props.imgPath} alt="welcome" className="rounded-md"/>
            </div>
            <div className="px-2 py-4">
              
              <div className="text-md font-bold ">  
                
                The premium package to boost your promotion.
              </div>
                <div id="users">
99k+ users 

$140.00

                </div>
            </div>
        </div>
     );
}
 
export default ServiceCard;
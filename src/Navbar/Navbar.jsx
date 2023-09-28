import {Link} from 'react-scroll'
function Navbar(){

    return (
        <div className="border-2 w-[1170px] max-sm:w-[100%] max-sm:p-2  h-[100px] shadow-sm mx-auto items-center sm:w-full  p-6  rounded-[10px] flex flex-row justify-between  bg-white border-white text-indi
        
        "> 
          <div className=''>
<span>         <h1 className="max-sm:text-[10px] font-bold text-[30px] 

">  Bizpro</h1>
</span>

            </div> 
            <div>
                <ul className="flex flex-row gap-4 text-[14px]">
                    <li className="hover:text-lightblue-200 cursor-pointer">
                       <Link to="Home" spy={true} smooth={true} duration={500} > Home</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="About" spy={true} smooth={true} duration={500} > About</Link>
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Process" spy={true} smooth={true} duration={500} > Services</Link>
                  
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                    <Link to="Services" spy={true} smooth={true} duration={500} > Reviews</Link>
                  
                   </li>

<li className="hover:text-lightblue-200 cursor-pointer">
<Link to="Enquiry" spy={true} smooth={true} duration={500} > Support</Link>
              
    </li>
                </ul>
            </div>

            <div className="flex flex-row gap-2 ">
                <button className="border-2 text-indi border-white rounded-md p-4 w-[120px] h-[55px] max-sm:w-[50%] max-sm:p-2">Sign in</button>
                <button className="border-2 border-indi bg-indi text-white rounded-md p-4 bg-indigo w-[120px] h-[55px] max-sm:w-[50%]">Free trial</button>
            </div>
        </div>
    )
}
export default Navbar;

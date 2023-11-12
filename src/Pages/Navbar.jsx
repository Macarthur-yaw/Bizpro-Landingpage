import {Link} from 'react-scroll'
function Navbar(){
    return (
      <div className="border-2   w-[100%]   h-[20%]  md:shadow-md md:mx-auto items-center md:p-6 md:rounded-[10px] flex flex-row justify-between bg-white border-white text-indi">

          <div className=''>
<span>         <h1 className="font-bold md:text-[32px] 

">  Bizpro</h1>
</span>

            </div> 
            <div>
             <ul className="flex flex-row gap-4 md:text-[14px] text-sm ">
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

                {/* <FaBars onClick={showMenu} className='sm:block hidden'/> */}
            </div>

            <div className="flex flex-row gap-2 ">
                <button className="border-2 text-indi border-white rounded-md p-4  md:h-[55px] md:w-[100px] md::p-2">Sign in</button>
                <button className="border-2 border-indi bg-indi text-white rounded-md p-4 bg-indigo  md:h-[55px] md:w-[80%]">Free trial</button>
            </div>
        </div>
    )
}
export default Navbar;
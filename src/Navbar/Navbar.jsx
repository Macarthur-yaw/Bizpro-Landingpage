function Navbar(){

    return (
        <div className="border-2 w-1/2 shadow-sm mx-auto items-center sm:w-full  p-6  rounded-lg flex flex-row justify-between  bg-white border-white text-indi"> 
          <div>
<span>         <h1 className="font-bold">  Bizpro</h1>
</span>

            </div> 
            <div>
                <ul className="flex flex-row gap-4">
                    <li className="hover:text-lightblue-200 cursor-pointer">
                        Home
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                        About
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
                        Services
                    </li>
                    <li className="hover:text-lightblue-200 cursor-pointer">
Reviews                    </li>

<li className="hover:text-lightblue-200 cursor-pointer">Support</li>
                </ul>
            </div>

            <div className="flex flex-row gap-2 ">
                <button className="border-2 text-indi border-white rounded-md p-4 ">Sign in</button>
                <button className="border-2 border-indi bg-indi text-white rounded-md p-4 bg-indigo ">Free trial</button>
            </div>
        </div>
    )
}
export default Navbar;

import Navbar from "./Navbar";
import Body from "./Body";

const Home = () => {
    return ( 

        <div className="flex flex-col  p-10 py-6 " style={{backgroundColor:"#ECF9FF"}}>
            <div className="sm:p-8 ">
            <Navbar/>


            </div>

            <div className="sm:p-8">
<Body/>
            </div>
  
        </div>
      
     );
}
 
export default Home;
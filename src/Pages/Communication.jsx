import communicationPicture from '../assets/communication.png'
const Communication = () => {
    return (
        <div>
          
          <div id="header" className='flex flex-col items-center'>
<h1 className='font-bold text-[45px] text-[#060640]'>
    Global Promotion
</h1>
<h3 className='text-[16px] w-[764px] text-center text-[#9090A7]'>
Businesses generally promote their brand, products, and services by identifying audience. No wonder that promotion strategy is one of the most important processes in marketing.

</h3>
          </div>

<img src={communicationPicture} alt='a communication interface'/>          
           </div>
      );
}
 
export default Communication;
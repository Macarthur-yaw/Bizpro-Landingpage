import { FaInstagram,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa'
const Footer = () => {
    return (
      <div className='bg-[#060640] flex flex-col text-white'>
        <div className="bg-[#060640] flex flex-row text-white gap-4 justify-between p-6 items-start">
    
<div id="footer1" className='flex flex-col hidden md:block gap-2 '>
<span className='flex flex-col gap-2 '>
<h1 className='md:text-4xl font-semibold'>
  Bizpro
</h1>

<h3 className='text-[#9090A7] md:w-[350px] md:text-[16px]'>
This is big one and i consider it one of the most important things for a business. 
</h3>
</span>
<div id='footerIcons' className='flex flex-row gap-2'>
  
<FaFacebook className='border-[1px] rounded-[50%] p-2 md:text-3xl text-[#9090A7] border-[#9090A7]'/>
<FaInstagram className='border-[1px]  rounded-[50%] p-2 md:text-3xl text-[#9090A7] border-[#9090A7]'/>
<FaTwitter className='border-[1px]  rounded-[50%] p-2 md:text-3xl text-[#9090A7] border-[#9090A7]'/>
<FaLinkedin className='border-[1px]  rounded-[50%] p-2 md:text-3xl text-[#9090A7] border-[#9090A7]'/>
</div>

</div>

<div id="footer2" className='flex flex-col gap-2'>

  <h1 className='text-[12px]'>Quick Links</h1>

  <ul className='text-[#9090A7] text-[10px] flex flex-col gap-[5px] list-none '>
    <li>Home</li>
    <li>About</li>
    <li>Appointment</li>
    <li>Blog</li>
    <li>Contact</li>
  </ul>

</div>

<div id="footer3" className='flex flex-col gap-2'>

<h1 className='text-[12px]'>Company</h1>

<ul className='text-[#9090A7] text-[10px]  flex flex-col gap-[5px] list-none'>
  {/* <li>Home</li> */}
  <li>About</li>
  <li>Contact</li>
  <li>Careers</li>
  <li>Press</li>
</ul>

</div>

<div id="footer4" className=' flex flex-col gap-2'>
<h1 className='text-[12px]'>Information</h1>

<ul className='text-[#9090A7] text-[10px] flex flex-col gap-[5px] list-none'>
  {/* <li>Home</li> */}
  {/* <li>About</li> */}
  <li>Privacy Policy</li>
  <li>Terms and Conditions</li>
  <li>FAQ</li>
</ul>

</div>


</div>
<div id='belowFooter' className='flex flex-row text-[12px] justify-between md:px-[136px] py-[27px] bg-[#000020] md:h-[80px] px-10 '>
<h1>Copyright &copy; 2021 Bizpro</h1>
<h1>All Rights Reserved</h1>
</div>
        </div>
      );
}
 
export default Footer;
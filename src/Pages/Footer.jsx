import { FaInstagram,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa'
const Footer = () => {
    return (
      <div className='bg-[#060640] flex flex-col text-white'>
        <div className="bg-[#060640] flex flex-row text-white justify-between p-8 items-start">
    
<div id="footer1" className='flex flex-col gap-2 '>

<h1 className='text-4xl font-semibold'>
  Bizpro
</h1>

<h3 className='text-[#9090A7] w-[350px] text-[16px]'>
This is big one and i consider it one of the most important things for a business. 
</h3>

<div id='footerIcons' className='flex flex-row gap-2'>
  
<FaFacebook className='border-[1px] rounded-[50%] p-2 text-3xl text-[#9090A7] border-[#9090A7]'/>
<FaInstagram className='border-[1px]  rounded-[50%] p-2 text-3xl text-[#9090A7] border-[#9090A7]'/>
<FaTwitter className='border-[1px]  rounded-[50%] p-2 text-3xl text-[#9090A7] border-[#9090A7]'/>
<FaLinkedin className='border-[1px]  rounded-[50%] p-2 text-3xl text-[#9090A7] border-[#9090A7]'/>
</div>

</div>

<div id="footer2" className='flex flex-col gap-2'>

  <h1>Quick Links</h1>

  <ul className='text-[#9090A7] flex flex-col gap-[5px]'>
    <li>Home</li>
    <li>About</li>
    <li>Appointment</li>
    <li>Blog</li>
    <li>Contact</li>
  </ul>

</div>

<div id="footer3" className='flex flex-col gap-2'>

<h1>Company</h1>

<ul className='text-[#9090A7] flex flex-col gap-[5px]'>
  {/* <li>Home</li> */}
  <li>About</li>
  <li>Contact</li>
  <li>Careers</li>
  <li>Press</li>
</ul>

</div>

<div id="footer4" className=' flex flex-col gap-2'>
<h1>Information</h1>

<ul className='text-[#9090A7] flex flex-col gap-[5px]'>
  {/* <li>Home</li> */}
  {/* <li>About</li> */}
  <li>Privacy Policy</li>
  <li>Terms and Conditions</li>
  <li>FAQ</li>
</ul>

</div>


</div>
<div id='belowFooter' className='flex flex-row justify-between px-[136px] py-[27px] bg-[#000020] h-[80px]'>
<h1>Copyright &copy; 2021 Bizpro</h1>
<h1>All Rights Reserved</h1>
</div>
        </div>
      );
}
 
export default Footer;
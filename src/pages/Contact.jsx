import { useEffect } from'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Footer from "../components/Footer";
import { GoArrowDownRight } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    
}, [])

  return (
    // <div className="flex flex-col justify-center text-center items-center pt-40">
    //   <div className="border-t-2 w-4/5 pb-7"></div>
    //   <div className="pb-7 text-gray-500"> 
    //     <p className="montserrat pb-6 text-black tracking-widerr">CONTACTS</p>
    //     <p className="text-sm">ayomideolamide@yahoo.com</p>
    //     <p className="text-sm">info@ayomideola.com</p>
    //     <div className="pb-6"></div>
    //     <div className="flex gap-5 justify-center items-center">
    //       <a href="https://www.instagram.com/ajayiayomideo/instagram.com" target="_blank"><FaInstagram size={25} /></a>
    //       <a href="https://www.twitter.com" target="_blank"><FaXTwitter size={25} /></a>
    //       <a href="https://www.tiktok.com"  target="_blank"><FaTiktok size={25} /></a>

    //     </div>

    //   </div>
    //   <div className="border-t-2 w-4/5"></div>

    //   <div className='pt-24'>
    //     <Footer />
    //   </div>
    // </div>
    <div className='flex flex-col gap-40'>
      <div className='flex pt-10 md:pt-20 justify-center md:flex-row flex-col gap-6 md-gap-0'>
        <div className='w-full md:w-2/5 flex  flex-col gap-2 md:gap-5 px-4 md:px-0 ' data-aos="zoom-out">
          <div className='flex gap-1 items-center'>
            <p className='text-2xl md:text-4xl'>LETS WORK TOGETHER</p>
            <GoArrowDownRight size={40} />

          </div>
          
          <p className='w-full md:w-2/3 text-sm md:text-sm text-gray-500 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eum recusandae earum delectus vel unde tempora sit mollitia fuga, molestiae quidem impedit.</p>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-500 font-semibold md:text-sm text-sm'>Call me:</p>
            <p className='text-sm md:text-sm text-gray-500 '>+234 9033 221 222</p>
          </div>
          
          <div className='flex flex-col gap-2'>
            <p className='text-gray-500 font-semibold text-sm md:text-sm '>Follow me:</p>
            <div className='flex gap-4'>
              <a href="https://www.instagram.com/ajayiayomideo/instagram.com" target="_blank"><FaInstagram size={20} /></a>
              <a href="https://www.twitter.com" target="_blank"><FaXTwitter size={18} /></a>
              <a href="https://www.tiktok.com"  target="_blank"><FaTiktok size={18} /></a>

            </div>
            
          </div>
        </div>
        <form className=' w-full p-4 md:w-2/5 flex flex-col gap-4' action="" data-aos='zoom-in'>
          <input placeholder='Full name' type="text" className='border border-gray-300 h-11 pl-4 text-sm outline-none' />
          <input placeholder='Email' type="text" className='border border-gray-300 h-11 pl-4 text-sm outline-none' />
          <textarea placeholder='Description' name="" id="" cols="30" rows="10" className='border border-gray-300 pl-4 pt-2 text-sm outline-none'></textarea>
          <button type="submit" className='border h-11  border-gray-300 hover:bg-darkBlack hover:text-darkWhite text-gray-500 text-sm '>Get in touch</button>
        </form>
      
    </div>
    <div>
      <Footer />
    </div>

    </div>
    
  )
}

export default Contact

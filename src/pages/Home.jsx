import { Link } from 'react-router-dom';
import aa from '../assets/mide7.jpeg';
import aa2 from '../assets/mideP.jpeg';
import aa3 from '../assets/mide5.jpeg';
import aa4 from '../assets/mide4.jpeg';
import aa5 from '../assets/mide8.jpeg';
import aa6 from '../assets/mide6.jpeg';
import { useState, useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init({duration:2000})
}, [])


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-0 '>
        <div
          className='cursor-pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? (
            <Link to='/collection/portraits'><div className=' bg-orange-300 h-full flex items-center justify-center '>
            <p className='text-xs font-medium'>PORTRAITS</p>
          </div></Link>
          ) : (
            <img data-aos='zoom-in'  src={aa} alt="Image 1 description" className='w-full h-full object-cover' />
          )}
        </div>
        
        

        <img data-aos='zoom-out'  src={aa2} alt="Image 2 description" className='w-full h-full object-cover' />
        <img data-aos='zoom-in'  src={aa3} alt="Image 3 description" className='w-full h-full object-cover' />
        <img src={aa4} alt="Image 4 description" className='w-full h-full object-cover' />
        <img src={aa5} alt="Image 5 description" className='w-full h-full object-cover' />
        <img src={aa6} alt="Image 6 description" className='w-full h-full object-cover' />
      </div>


      <div className='bg-stone-600 text-white w-full flex flex-col gap-5 items-center justify-center py-20 text-center'>
        <p className='text-xl font-medium'>Ayomide Olamide is a talented photographer <br /> and creative director based in Lagos, Nigeria.</p>
        <div className="flex gap-5 justify-center items-center">
          <a href="https://www.instagram.com/ajayiayomideo/instagram.com" target="_blank"><FaInstagram size={25} /></a>
          <a href="https://www.twitter.com" target="_blank"><FaXTwitter size={25} /></a>
          <a href="https://www.tiktok.com"  target="_blank"><FaTiktok size={25} /></a>

        </div>

      </div>
      <div className='pt-20 pb-5'>
        <Footer />

      </div>
      
    </div>


  );
}
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { FaInstagram, FaTiktok } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

import aa4 from '../assets/mide4.jpeg';
import concert from '../assets/concert.jpeg'
import art from '../assets/art.jpg'
import wed from '../assets/weddings.jpeg'
import sports from '../assets/sports.jpeg'
import nature from '../assets/nature.jpeg'

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const images = [
    { src: aa4, text: 'Portrait', link: '/collection/portraits' },
    { src: nature, text: 'Nature', link: '/collection/nature' },
    { src: wed, text: 'Wedding', link: '/collection/weddings' },
    { src: art, text: 'Art', link: '/collection/art' },
    { src: sports, text: 'Sports', link: '/collection/sports' },
    { src: concert, text: 'Concerts', link: '/collection/concert' }
  ];

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
        {images.map((image, index) => (
          <Link to={image.link} key={index} className='image-container' data-aos='zoom-in'>
            <img src={image.src} alt={`${image.text} photography`} />
            <div className='overlay text-base'>
              {image.text}
            </div>
          </Link>
        ))}
      </div>

      {/* <div className='bg-stone-600 text-white w-full flex flex-col gap-5 items-center justify-center py-20 text-center'>
        <p className='text-base md:text-xl font-medium'>
          Ayomide Olamide is a talented photographer <br /> and creative director based in Lagos, Nigeria.
        </p>
        <div className="flex gap-5 justify-center items-center">
          <a href="https://www.instagram.com/ajayiayomideo/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={25} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={25} />
          </a>
        </div>
      </div> */}

      <div className='pt-24 pb-8'>
        <Footer />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import aa4 from '../assets/mide4.jpeg';
import art from '../assets/art.jpg'
import wed from '../assets/weddings.jpeg'
import sports from '../assets/sports.jpeg'
import nature from '../assets/nature.jpeg'
import Skeleton from '../components/Skeleton';
import Header from '../components/Header';

import birthday from '../assets/DrNike45/DSC05545.jpg'

export default function Collection() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    window.scrollTo(0, 0);
    
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  

  const images = [
    { src: aa4, text: 'Portrait', link: '/collection/portraits' },
    { src: birthday, text: 'birthday', link: '/collection/birthdays' },
    { src: nature, text: 'Nature', link: '/collection/nature' },
    { src: wed, text: 'Wedding', link: '/collection/weddings' },
    { src: art, text: 'Art', link: '/collection/art' },
    { src: sports, text: 'Sports', link: '/collection/sports' },
    
  ];

  return (
    <div>
      <Header color='text-gray-400' logoColor='text-black' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-0 min-h-screen'>
        {!loading ? images.map((image, index) => (
          <Link to={image.link} key={index} className='image-container ' data-aos='zoom-in'>
            <img src={image.src} alt={`${image.text} photography`} />
            <div className='overlay  text-base'>
              {image.text}
            </div>
          </Link>
        )) : [1, 2, 3, 4, 5, 6].map(n => <Skeleton key={n} />)}
      </div>


      <div className='pt-24 pb-8'>
        <Footer />
      </div>
    </div>
    
  );
}

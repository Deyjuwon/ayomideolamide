import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import aa4 from '../assets/mide7.jpeg';
import concert from '../assets/mide5.jpeg';
import art from '../assets/art.jpg';
import wed from '../assets/weddings.jpeg';
import sports from '../assets/sports.jpeg';
import nature from '../assets/mide2.jpeg';

const images = [
  { src: aa4, alt: "Mide Event" },
  { src: concert, alt: "Concert" },
  { src: art, alt: "Art Exhibition" },
  { src: wed, alt: "Wedding" },
  { src: sports, alt: "Sports Event" },
  { src: nature, alt: "Nature" }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init();

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full">
      
      <section className="relative overflow-hidden h-full">
        <div 
          className="absolute top-0 left-0 flex transition-transform duration-500 ease-in-out h-full w-full" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className=" min-w-full h-full flex-shrink-0 flex justify-center items-center ">
              <img src={image.src} alt={image.alt} className=" w-screen  md:w-3/4 h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </section>
      
      <div className='pt-24 pb-8'>
        <Footer />
      </div>
    </div>
  );
}
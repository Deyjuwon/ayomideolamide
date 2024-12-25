import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLink } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import aa4 from '../assets/mide4.webp';
import aa3 from '../assets/mide7.webp';
import aa7 from '../assets/interior.jpg';
import aa1 from '../assets/IMG_7240.webp';
import aa5 from '../assets/DSC00479.jpg';
import aa2 from '../assets/IMG_7255.webp';
import aa6 from '../assets/50THbirthday-199.webp';
import aa8 from '../assets/DSC05490.webp'
import wed from '../assets/weddings.jpeg'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';

const Home = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    
    { src: aa1, text: 'portrait' },
    { src: aa5, text: 'Portrait' },
    { src: aa4, text: 'Portrait' },
    { src: aa6, text: 'Portrait' },
    
    
    { src: aa7, text: 'interior'},
    { src: aa2, text: 'Portrait' },
    { src: wed, text: 'wedding' },
    { src: aa8, text: 'Portrait' },
  ];

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });



    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      // clearTimeout(loadingTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='relative'>
        <div className='relative w-full h-screen'>
          <img src={images[currentImg].src} alt={images[currentImg].text} className=' lg:h-screen w-full object-cover  h-screen' />
          <div className='absolute inset-0 flex items-start top-1/3 justify-center'>
            <div className='scroll-container'>
              <div className='scroll-text  text-white text-base md:text-xl text-center font-bold'>DOCUMENTARY PHOTOGRAPHER, INVESTOR ,  <br /> ARMY VETERAN.</div>
            </div>
          </div>
        </div>

      <section className='flex flex-col gap-4 lg:flex-row items-center justify-center py-10 bg-gradient-to-b md:bg-gradient-to-r from-white to-yellow1 text-darkBlack'>
        <div className='lg:w-1/2 w-full px-4' data-aos='zoom-in'>
          <p className='lg:text-3xl lg:px-16 text-center font-bold'>CAPTURING MOMENTS FOR GENERATIONS TO COME</p>
        </div>
        <div className='lg:w-1/2 w-full flex flex-col gap-5 px-4 md:px-14' data-aos='fade-up'>
          <p className='lg:text-base text-sm lg:pr-20 lg:leading-8 leading-6'>
          At the heart of every photograph is a story, a fleeting moment that deserves to be remembered for generations. With a keen eye for detail and a passion for timeless visuals, we capture more than just images—we capture emotions, personalities, and the essence of each moment. From the spontaneous laughter of a loved one to the serene beauty of nature, every shot is crafted with care to ensure it lives on in your memories. We believe that the best moments in life should never fade, and our goal is to turn those moments into lasting works of art, cherished for years to come.
          </p>
          <div className='self-center lg:self-start'>
            <Link to='/collection'>
              <button className='border rounded-xl border-gray-500 hover:bg-darkBlack hover:text-darkWhite h-12 w-36 text-xs lg:text-sm lg:h-16 lg:w-44'>SEE COLLECTION</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='text-center py-24 lg:text-base text-sm text-gray-500 lg:w-3/5 w-full px-4 md:px-14 m-auto' data-aos='zoom-in'>
        <q className='italic '>Moments are short-lived, but memories last forever. Through the lens, I craft stories that celebrate life, love, and beauty—ensuring that every emotion lives on</q>
        <p>- Ajayi Ayomide Olamide</p>
      </section>

      <section className='flex flex-col gap-6 lg:flex-row items-center justify-center py-10 bg-gradient-to-b md:bg-gradient-to-r from-white to-yellow1 text-darkBlack'>
        <div className='lg:w-1/2 w-full px-4 flex justify-center items-center'>
          <img src={aa3} alt="Nature" className='rounded-full w-1/2' data-aos='zoom-in' />
        </div>
        <div className='lg:w-1/2 w-full flex flex-col gap-5 px-4 md:px-14' data-aos='zoom-in'>
          <p className='lg:text-base text-sm lg:pr-20 lg:leading-8 leading-6'>
          With a passion for storytelling through photography, I aim to capture the essence of every moment—be it the quiet beauty of nature, the raw emotions of a portrait, or the vibrant energy of celebrations. Each shot reflects my commitment to creating timeless visuals that resonate with your memories and emotions.
          </p>
          <div className='self-center lg:self-start'>
            <Link to='/about'>
              <button className='border border-gray-500 rounded-lg hover:bg-darkBlack hover:text-darkWhite h-12 w-36 text-xs lg:text-sm lg:h-16 lg:w-44'>MORE ABOUT ME</button>
            </Link>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className='flex justify-center gap-2 items-center py-10'>
        <p className='lg:text-3xl text-base font-medium text-[#222222]'>LETS CREATE MAGIC TOGETHER!</p>
        <Link to='/contact' className='text-[#222222]'><FaLink size={20} /></Link>
      </section>

      <div className="absolute z-50 top-0 w-full">
        <Header logoColor='text-white' color='text-white' hamColor='white' />

      </div>

      <div className='py-10'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

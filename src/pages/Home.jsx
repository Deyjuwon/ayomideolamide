import aa4 from '../assets/mide4.jpeg';
import aa8 from '../assets/mide8.jpeg';
import aa6 from '../assets/mide6.jpeg';
import aa7 from '../assets/mide7.jpeg';
import aap from '../assets/mideP.jpeg';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaLink } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2500, once: true });
  }, []);
  return (
    <div>
      <div className='w-full'>
        <img src={aa7} alt="" className='lg:h-full h-3/4 w-full object-cover ' />
      </div>
      <section className='flex flex-col gap-4 lg:flex-row items-center justify-center py-10 bg-gradient-to-b md:bg-gradient-to-r from-white to-yellow1 text-darkBlack'>
        <div className='lg:w-1/2 w-full px-4' data-aos='fade-right'>
            <p className='lg:text-3xl lg:px-16  text-center font-bold'>CAPTURING MOMENTS FOR GENERATIONS TO COME</p>
        </div>
        <div className='lg:w-1/2 w-full flex flex-col gap-5 px-4 md:px-14' data-aos='fade-left'>
          <p className='lg:text-sm  text-xs lg:pr-20 lg:leading-8 leading-6 font-semibold  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae similique accusantium velit dolores explicabo quaerat reiciendis fugiat tenetur obcaecati beatae odit aut recusandae quod architecto omnis, sed provident impedit.
          Iste error ducimus voluptates tempora aspernatur asperiores atque ut quaerat accusantium maxime, fugit, obcaecati placeat. Quisquam quidem sunt ipsum non assumenda? Repudiandae quos rerum inventore non obcaecati consequuntur architecto aliquid?
          Temporibus beatae itaque, possimus velit eaque, maiores nostrum maxime quia assumenda incidunt quae consectetur. Neque error tempora iure vitae nulla consequuntur aperiam impedit, exercitationem repellendus, quibusdam possimus labore odit minima?
          Animi nobis beatae esse eligendi officiis cum qui voluptatum et atque saepe maiores doloremque, maxime quo illo omnis amet molestiae possimus dicta minus. Quos, dolorum eum! Eaque aliquam odit in mus velit eaque, maiores nostrum maxime quia assumenda incidunt quae consectetur. Neque error tempora iure vitae nulla consequuntur aperiam impedit, exercitationem repellendus, quibusdam possimus labore odit minima?
          Animi nobis beatae esse eligendi o.</p>
          <div className=' self-center lg:self-start'>
            <Link to='/collection'><button className='border border-gray-500 hover:bg-darkBlack hover:text-darkWhite h-12 w-36 text-xs lg:text-sm lg:h-16 lg:w-44'>SEE COLLECTION</button></Link>

          </div>
          

        </div>
        
        
      </section>
      <section className='text-center py-24 text-sm lg:text-lg text-gray-500 lg:w-3/5 w-full px-4 md:px-14   m-auto' data-aos='zoom-in'>
        <q className='italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ad voluptas ducimus mollitia ratione error tempora! Fugiat odit quae quam. Similique est molestias repudiandae deserunt dolorem</q>
        <p>- Ajayi Ayomide Olamide</p>
      </section>
      <section className='flex flex-col gap-6 lg:flex-row items-center justify-center py-10 bg-gradient-to-b md:bg-gradient-to-r from-white to-yellow1 text-darkBlack'>
        <div className='lg:w-1/2 w-full px-4 flex justify-center items-center'>
          <img src={aa8} alt="" className='rounded-full w-1/2 ' data-aos='zoom-in' />

        </div>
        
        <div className='lg:w-1/2 w-full flex flex-col gap-5 px-4 md:px-14' data-aos='zoom-in'>
          <p className='lg:text-sm text-xs lg:pr-20 lg:leading-8 leading-6 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic porro fugiat dolor ut. Magnam minus, asperiores expedita nemo rerum minima ullam incidunt odit, cum nostrum, eveniet suscipit quis nulla quasi?
          Deserunt incidunt officiis aliquam quo architecto aspernatur, fugit exercitationem molestias non a tempore, ratione laudantium optio maxime corrupti. Eum nihil aliquid quaerat odit quis nam iste repel.</p>
          <div className='self-center lg:self-start'>
            <Link to='/about'><button className='border border-gray-500 hover:bg-darkBlack hover:text-darkWhite h-12 w-36 text-xs lg:text-sm lg:h-16 lg:w-44'>MORE ABOUT ME</button></Link>

          </div>
          
        </div>
      </section>
      <section className='flex justify-center gap-2 items-center py-10'>
        <p className='lg:text-3xl text-base font-medium'>LETS CREATE MAGIC TOGETHER!</p>
        <Link to='/contact'><FaLink size={20} /></Link>
      </section>

      <div className='py-10'>
        <Footer />
      </div>

    
    </div>

  
    
  );
};

export default Home;

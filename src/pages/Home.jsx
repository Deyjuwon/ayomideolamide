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

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2500, once: true });
  }, []);
  return (
    <div>
      <div className='h-screen w-full'>
        <img src={aa4} alt="" className='md:h-full h-3/4 w-full object-cover ' />
      </div>
      <section className='flex flex-col gap-4 md:flex-row items-center justify-center py-10 bg-gradient-to-r from-green2 via-brown1 to-green2 text-darkBlack'>
        <div className='md:w-1/2 w-full px-4' data-aos='fade-right'>
            <p className='md:text-3xl md:px-16  text-center font-bold'>CAPTURING MOMENTS FOR GENERATIONS TO COME</p>
        </div>
        <div className='md:w-1/2 w-full flex flex-col gap-5 px-4' data-aos='fade-left'>
          <p className='text-sm md:pr-20 md:leading-8 leading-6 font-semibold  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae similique accusantium velit dolores explicabo quaerat reiciendis fugiat tenetur obcaecati beatae odit aut recusandae quod architecto omnis, sed provident impedit.
          Iste error ducimus voluptates tempora aspernatur asperiores atque ut quaerat accusantium maxime, fugit, obcaecati placeat. Quisquam quidem sunt ipsum non assumenda? Repudiandae quos rerum inventore non obcaecati consequuntur architecto aliquid?
          Temporibus beatae itaque, possimus velit eaque, maiores nostrum maxime quia assumenda incidunt quae consectetur. Neque error tempora iure vitae nulla consequuntur aperiam impedit, exercitationem repellendus, quibusdam possimus labore odit minima?
          Animi nobis beatae esse eligendi officiis cum qui voluptatum et atque saepe maiores doloremque, maxime quo illo omnis amet molestiae possimus dicta minus. Quos, dolorum eum! Eaque aliquam odit in mus velit eaque, maiores nostrum maxime quia assumenda incidunt quae consectetur. Neque error tempora iure vitae nulla consequuntur aperiam impedit, exercitationem repellendus, quibusdam possimus labore odit minima?
          Animi nobis beatae esse eligendi officiis cum qui voluptatum et atque saepe maiores doloremque, maxime quo illo omnis amet molestiae possimus dicta minus. Quos, dolorum eum! Eaque aliquam odit in.</p>
          <div className='m-auto'>
            <Link to='/collection'><button className='border border-gray-500 hover:bg-darkBlack hover:text-darkWhite h-12 w-36 text-xs md:text-sm md:h-16 md:w-44'>SEE COLLECTION</button></Link>

          </div>
          

        </div>
        
        
      </section>
      <section className='text-center py-10 text-sm md:text-lg text-gray-500 md:w-3/5 w-full  m-auto' data-aos='fade-up'>
        <q className='italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ad voluptas ducimus mollitia ratione error tempora! Fugiat odit quae quam. Similique est molestias repudiandae deserunt dolorem</q>
        <p>- Ajayi Ayomide Olamide</p>
      </section>

    </div>

  
    
  );
};

export default Home;

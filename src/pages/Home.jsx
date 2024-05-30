import aa4 from '../assets/mide4.jpeg';
import aa8 from '../assets/mide8.jpeg';
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
    <div className='flex flex-col gap-10 md:gap-20'>
      <div className='flex flex-col w-full justify-center sm:items-center gap-10 md:gap-0  md:flex-row md:flex-wrap'>
        <div className='relative w-full flex  justify-center md:justify-end md:w-2/5'>
          <div className='absolute rotate w-fit h-fit  top-36 -left-28 md:-left-40 md:top-1/3 '>
            <p className=' flex flex-col gap-0 tracking-wider md:tracking-wider  ' data-aos="fade-left">
              <span className='text-2xl md:text-4xl'>AJAYI AYOMIDE OLAMIDE</span>
              <span className='text-xs md:text-sm'>Photography</span>
            </p>
            
          </div>
          <img data-aos='zoom-in' src={aa4} alt="" className='object-cover   w-60 min-h-80 md:w-420 md:h-520' />

        </div>
        
        <div className='md:w-1/5 w-full md:self-end  flex justify-center'>
          <img src={aa4} alt="" className='object-cover w-36 h-44 md:w-52 md:h-60' data-aos='fade-right' />
        </div>
        <div className='flex flex-col justify-center  items-center  gap-10 w-full md:w-2/6 md:gap-16'>
          <img src={aa8} alt="" data-aos='fade-left' className='object-cover w-48 h-60 md:h-470 md:w-420 md:self-start' />
          <p className='text-xs w-4/6 text-gray-500'>“jfuufuf fhfj fhfif fjjf hfj . ddbd hd fhuk,fjfjl,f fjjd,hdjjf fjf,f kkflfpf fj hdn qghw hyfu dhejhdbfj dhdh dbhdhdn” </p>
          <button className='h-10 w-32 flex items-center justify-center border border-gray-300 bg-transparent text-xs font-normal hover:bg-black hover:text-white md:h-14 md:w-36'><Link to='/collection'>SEE COLLECTION</Link></button>
        </div>
      
    </div>
    <Footer />

    </div>
    
  );
};

export default Home;

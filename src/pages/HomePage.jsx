import aa4 from '../assets/mide4.jpeg';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full gap-10 justify-center items-center '>
      <div className='relative w-3/4 '>
        <div className=''>
          <p className='transform -rotate-90 flex flex-col gap-0 left-40 absolute'>
            <span>AJAYI AYOMIDE OLAMIDE</span>
            <span>Photography</span>
          </p>
          
        </div>
        <img src={aa4} alt="" className=' max-w-64  max-h-72' />

      </div>
      
      <div>
        <img src={aa4} alt="" className=' w-36 h-44' />
      </div>
      <div className='flex flex-col justify-center items-center gap-10'>
        <img src={aa4} alt="" className=' w-48- h-60' />
        <p className='text-xs w-4/6'>“jfuufuf fhfj fhfif fjjf hfj . ddbd hd fhuk,fjfjl,f fjjd, fj hdn qghw hyfu dhejhdbfj dhdh dbhdhdn” </p>
        <button className='h-10 w-32 flex items-center justify-center border border-gray-300 bg-transparent text-xs font-normal'>SEE COLLECTION</button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

import aa4 from '../assets/mide4.jpeg';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full gap-10 justify-center items-center '>
      <div className='relative w-full flex justify-center'>
        <div className='absolute rotate w-fit h-fit  top-36 -left-28 '>
          <p className=' flex flex-col gap-0 tracking-wider '>
            <span className='text-2xl'>AJAYI AYOMIDE OLAMIDE</span>
            <span className='text-xs'>Photography</span>
          </p>
          
        </div>
        <img src={aa4} alt="" className=' w-64 min-h-80' />

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

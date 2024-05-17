
import { Link } from 'react-router-dom';





export default function Home() {

  return (
    <div className=' bg-homeBg h-screen brightness-100 bg-cover'>
  
      <div className=" text-white flex flex-col justify-center items-center gap-20" >
        
        <p  className='flex gap-3 flex-col justify-center items-center text-center pt-32 md:pt-20 text-white'><span className='text-5xl md:text-7xl px-10'>Make A Statement</span> <span className='text-6xl md:text-8xl'>WITHOUT SAYING</span><span className='text-7xl md:text-9xl'>A WORD</span></p>
        <div >
          <Link to='/collection'><button className='p-4 bg-gradient-to-r from-lightBlack to to-darkBlack border border-gray-400 rounded-3xl flex items-center justify-center w-60 h-16 brightness-150 hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 ease-in'>explore more</button></Link>
          

        </div>

        
        
      </div>
    </div>
  );
}

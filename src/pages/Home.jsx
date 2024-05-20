import { Link } from 'react-router-dom';
import aa from '../assets/mide7.jpeg';
import aa2 from '../assets/mideP.jpeg';
import aa3 from '../assets/mide5.jpeg';
import aa4 from '../assets/mide4.jpeg';
import aa5 from '../assets/mide8.jpeg';
import aa6 from '../assets/mide6.jpeg';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-0 '>
        <div
          className='cursor-pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? (
            <Link to='/collection/portrait'><div className=' bg-orange-300 h-full flex items-center justify-center '>
            <p className='text-xs font-medium'>PORTRAITS</p>
          </div></Link>
          ) : (
            <img src={aa} alt="Image 1 description" className='w-full h-full object-cover' />
          )}
        </div>
        
        

        <img src={aa2} alt="Image 2 description" className='w-full h-full object-cover' />
        <img src={aa3} alt="Image 3 description" className='w-full h-full object-cover' />
        <img src={aa4} alt="Image 4 description" className='w-full h-full object-cover' />
        <img src={aa5} alt="Image 5 description" className='w-full h-full object-cover' />
        <img src={aa6} alt="Image 6 description" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}
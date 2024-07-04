import React from 'react';
import event from '../assets/chopandchill(146).webp';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import data from '../testimonial';

const Testimonial = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10 gap-4 text-darkBlack'>
      <p className='text-xl'>TESTIMONIALS</p>
      <p className='text-3xl'>What My Clients Say</p>
      <div className='flex gap-10 overflow-x-auto'>
        {
          data.map((item) => {
            return (
              <div key={item.id} className='h-96 w-96 bg-gradient-to-br from-white via-yellow1 to-white rounded-lg px-10 flex flex-col justify-between items-center gap-6'>
                <div className='flex flex-col gap-6 pt-8 justify-center items-center'>
                  <img src={item.imgUrlt} alt="" className='rounded-full h-16 w-16 object-cover' />
                  <p className='text-sm'><FaQuoteLeft /> {item.testimony} <FaQuoteRight /></p>
                </div>
                <div className='text-center flex flex-col gap-3 pb-10'>
                  <p className='text-lg text-black'>{item.name}</p>
                  <p className='text-sm'>{item.position}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Testimonial;

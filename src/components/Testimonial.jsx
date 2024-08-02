import { useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../testimonial";

const Testimonial = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-5 lg:px-40 pt-14 text-darkBlack">
      <p className="text-sm lg:text-lg text-red-400">OUR CLIENTS</p>
      <p className="lg:text-3xl text-base font-bold text-black">TESTIMONIALS</p>
      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
        <p className="w-3/4 lg:text-sm text-sm lg:pr-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur vero ea ab velit fugiat odit exercitationem neque, totam reprehenderit quae eveniet aperiam impedit sed eligendi nam non mollitia rem!
        </p>
        <div className="flex gap-8">
          <div className="cursor-pointer" onClick={scrollLeft}>
            <IoIosArrowDropleft size={50} />
          </div>
          <div className="cursor-pointer" onClick={scrollRight}>
            <IoIosArrowDropright size={50} />
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 overflow-x-auto justify-center lg:justify-start" ref={containerRef} style={{ scrollSnapType: 'x mandatory' }}>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full lg:w-1/4" style={{ scrollSnapAlign: 'center' }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../testimonial";

const Testimonial = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-5 lg:px-40 pt-14 text-darkBlack">
      <p className="text-sm lg:text-lg text-red-400">OUR CLIENTS</p>
      <p className="lg:text-3xl text-base font-bold text-black">TESTIMONIALS</p>
      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
        <p className="w-11/12 lg:w-3/4 lg:text-base text-sm lg:pr-20">
        Nothing speaks louder than the words of those we've had the privilege to work with. From heartfelt weddings to striking portraits, our clients' experiences reflect the passion and dedication we pour into every project. Here’s what they have to say about the moments we’ve captured together.
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
        <div ref={scrollContainerRef} className="flex gap-10 overflow-x-auto no-scrollbar">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

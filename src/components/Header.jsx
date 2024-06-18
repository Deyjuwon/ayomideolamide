/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const Header = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleNavLinkClick = () => {
    setIsOpened(false);
  };

  return (
    <div className="flex  flex-row md:flex-col lg:gap-8 md:gap-4 items-center justify-between px-5 md:justify-around py-4 md:py-6 ">
      <div>
        <p className={`text-sm md:text-xl  tracking-wider md:tracking-widestt ${props.logoColor} font-bold logo`}>
          <Link to='/'>AYOMIDE OLAMIDE</Link>
        </p>
      </div>
      <div className="flex items-center">
        <nav>
          <ul className={`text-base ${props.color} font-medium hidden md:flex gap-20 tracking-tight`}>
            <li><Link to='/collection' className=" transition duration-200">COLLECTION</Link></li>
            <li><Link to="/about" className=" transition duration-200">ABOUT</Link></li>
            <li><Link to="/contact" className=" transition duration-200">CONTACT</Link></li>
            <li><Link to="/testimonials" className=" transition duration-200">TESTIMONIAL</Link></li>
            <li><Link to="/faq" className=" transition duration-200">FAQs</Link></li>
          </ul>
        </nav>
      </div>
      

      {isOpened ? (
        <div className='] flex items-center justify-center h-11 w-11 md:hidden z-50'>
          <IoMdClose className='fixed' size={20} onClick={() => setIsOpened(!isOpened)} />
        </div>
      ) : (
        <div className=' flex items-center justify-center h-11 w-11 md:hidden'>
          <RxHamburgerMenu size={20} color='white' onClick={() => setIsOpened(!isOpened)} />
        </div>
      )}

      {isOpened && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center pt-20 md:hidden">
          <ul className="text-gray-400 font-medium flex flex-col gap-5">
            <li><Link to="/collection" className=" transition duration-200" onClick={handleNavLinkClick}>COLLECTION</Link></li>
            <li><Link to="/about" className=" transition duration-200" onClick={handleNavLinkClick}>ABOUT</Link></li>
            <li><Link to="/contact" className=" transition duration-200" onClick={handleNavLinkClick}>CONTACT</Link></li>
            <li><Link to="/testimonials" className=" transition duration-200" onClick={handleNavLinkClick}>TESTIMONIAL</Link></li>
            <li><Link to="/faq" className=" transition duration-200" onClick={handleNavLinkClick}>FAQ</Link></li>
          </ul>
        </div>
      )}

     

      
    </div>
  );
}

export default Header;

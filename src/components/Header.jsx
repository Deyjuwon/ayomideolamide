import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-row md:flex-col gap-10 items-center justify-between px-5 md:justify-around py-4 md:py-10">
      <div>
        <p className="text-sm md:text-xl font-bold tracking-wider md:tracking-widestt logo">
          <Link to='/'>AYOMIDE OLAMIDE</Link>
        </p>
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="text-sm text-gray-400 font-medium hidden md:flex gap-20 tracking-tight">
            <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <Link to="" className="hover:text-gray-700 transition duration-200 flex ">
                <span>COLLECTION</span>
                <RiArrowDropDownLine size={20} />
              </Link>
              {isDropdownOpen && (
                <ul className="absolute  flex flex-col gap-1 top-full w-40 bg-stone-600 text-white z-50">
                  <li className="hover:bg-black p-2 cursor-pointer"><Link to="/collection/portraits">PORTRAITS</Link></li>
                  <li className="hover:bg-black p-2 cursor-pointer"><Link to="/collection/weddings">WEDDINGS</Link></li>
                  <li className="hover:bg-black p-2 cursor-pointer"><Link to="/collection/sports">SPORTS</Link></li>
                  <li className="hover:bg-black p-2 cursor-pointer"><Link to="/collection/nature">NATURE</Link></li>
                  <li className="hover:bg-black p-2 cursor-pointer"><Link to="/collection/vintage">VINTAGE</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/about" className="hover:text-gray-700 transition duration-200">ABOUT</Link></li>
            <li><Link to="/contact" className="hover:text-gray-700 transition duration-200">CONTACT</Link></li>
            <li><Link to="/testimonials" className="hover:text-gray-700 transition duration-200">TESTIMONIAL</Link></li>
            <li><Link to="/bookcall" className="hover:text-gray-700 transition duration-200">BOOK A CALL</Link></li>
          </ul>
        </nav>
      </div>

      {isOpened ? (
        <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden z-50'>
          <IoMdClose size={25} onClick={() => setIsOpened(!isOpened)} />
        </div>
      ) : (
        <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden'>
          <RxHamburgerMenu size={25} onClick={() => setIsOpened(!isOpened)} />
        </div>
      )}

      {isOpened && (
        <div className="absolute top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center pt-20 md:hidden">
          <ul className="text-gray-400 font-medium flex flex-col gap-5">
            <li><Link to="/collection" className="hover:text-gray-700 transition duration-200">COLLECTION</Link></li>
            <li><Link to="/about" className="hover:text-gray-700 transition duration-200">ABOUT</Link></li>
            <li><Link to="/contact" className="hover:text-gray-700 transition duration-200">CONTACT</Link></li>
            <li><Link to="/testimonials" className="hover:text-gray-700 transition duration-200">TESTIMONIAL</Link></li>
            <li><Link to="/bookcall" className="hover:text-gray-700 transition duration-200">BOOK A CALL</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

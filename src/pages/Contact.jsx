import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Footer from "../components/Footer";


const Contact = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center pt-40">
      <div className="border-t-2 w-4/5 pb-7"></div>
      <div className="pb-7 text-gray-500"> 
        <p className="montserrat pb-6 text-black tracking-widerr">CONTACTS</p>
        <p className="text-sm">ayomideolamide@yahoo.com</p>
        <p className="text-sm">info@ayomideola.com</p>
        <div className="pb-6"></div>
        <div className="flex gap-5 justify-center items-center">
          <a href="https://www.instagram.com/ajayiayomideo/instagram.com" target="_blank"><FaInstagram size={25} /></a>
          <a href="https://www.twitter.com" target="_blank"><FaXTwitter size={25} /></a>
          <a href="https://www.tiktok.com"  target="_blank"><FaTiktok size={25} /></a>

        </div>

      </div>
      <div className="border-t-2 w-4/5"></div>

      <div className='pt-24'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact

import { useState } from 'react';
import { GoArrowDownRight } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from '../components/Header';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mrbgwpav", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        e.target.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <div>
      <Header color="text-gray-400" logoColor="text-black" />
      <div className="flex flex-col gap-40">
        <div className="flex pt-10 md:pt-20 justify-center md:flex-row flex-col gap-6 md-gap-0">
          <div className="w-full md:w-2/5 flex flex-col gap-2 md:gap-5 px-4 md:px-0" data-aos="zoom-out">
            <div className="flex gap-1 items-center">
              <p className="text-2xl md:text-4xl">LETS WORK TOGETHER</p>
              <GoArrowDownRight size={40} />
            </div>
            <p className="w-full md:w-2/3 text-sm md:text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eum recusandae earum delectus vel unde tempora sit mollitia fuga, molestiae quidem impedit.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 font-semibold md:text-sm text-sm">Call me:</p>
              <p className="text-sm md:text-sm text-gray-500">+234 905 7171 176</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 font-semibold text-sm md:text-sm">Follow me:</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ajayiayomideo/" target="_blank"><FaInstagram size={20} /></a>
                <a href="https://x.com/ajayiayomideo" target="_blank"><FaXTwitter size={20} /></a>
                <a href="https://www.telegram.com" target="_blank"><FaTelegramPlane size={20} /></a>
              </div>
            </div>
          </div>

          {/* Formspree Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full p-4 md:w-2/5 flex flex-col gap-4"
            data-aos="zoom-in"
          >
            <input
              name="name"
              placeholder="Full name"
              type="text"
              className="border border-gray-300 h-11 pl-4 text-sm outline-none"
              required
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="border border-gray-300 h-11 pl-4 text-sm outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Description"
              className="border border-gray-300 pl-4 pt-2 text-sm outline-none"
              required
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="border h-11 cursor-pointer border-gray-300 hover:bg-darkBlack hover:text-darkWhite text-gray-500 text-sm"
            />
            {status === "SUCCESS" && <p className="text-green-500">Message sent successfully!</p>}
            {status === "ERROR" && <p className="text-red-500">Failed to send message. Try again later.</p>}
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

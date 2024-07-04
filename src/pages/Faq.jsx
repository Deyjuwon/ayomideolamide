import { useEffect } from 'react';
import aa5 from '../assets/mide5.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import {
  Accordion, 
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../utils/Accordion';
import Header from '../components/Header';


const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div>
      <Header color='text-gray-400' logoColor='text-black' />
      <div className="relative">
        <img src={aa5} alt="FAQ Banner" className="w-full h-44 lg:h-64 object-cover opacity-30" />
        <p className="text-base md:text-3xl text-gray-500 font-bold absolute inset-0 flex justify-center items-center">FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <div className="py-10 px-4 md:px-10 hidden md:block">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-700">FAQs</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10" data-aos="fade-up">
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">HOW MUCH DOES IT COST TO HIRE YOU?</h3>
              <p className="text-sm md:text-base text-gray-600">
                Every shoot is unique so we have a great selection of packages to fit your needs and budget. Please e-mail or complete the <a href="./contact" className="underline">contact form</a> on our website for details.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">DO YOU TRAVEL?</h3>
              <p className="text-sm md:text-base text-gray-600">
                Yes, we’ll go wherever you’ll take us! We absolutely adore traveling and are willing to travel anywhere.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10" data-aos="fade-up">
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">WE LOVE YOUR WORK! HOW DO WE BOOK YOU?</h3>
              <p className="text-sm md:text-base text-gray-600">
                We are so excited to talk with you and get to be a part of your special day! Simply fill out the form on our <a href="./contact" className="underline">contact section</a>, and we will be in touch to talk details and get your date locked in.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">DO WE GET AN ONLINE GALLERY?</h3>
              <p className="text-sm md:text-base text-gray-600">
                Yes! Every package includes a password-protected online gallery that contains all of the finished photos from your shoot/event for you to view, download, and share. You will love it!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10" data-aos="fade-up">
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">HOW LONG WILL IT TAKE TO GET OUR PHOTOS?</h3>
              <p className="text-sm md:text-base text-gray-600">
                A sneak peek will be sent to you within 1-2 weeks of your event. For weddings, post-production takes approximately 4-6 weeks. Final images include editing and color correcting so that all pictures are perfect.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">WHAT HAPPENS IF IT RAINS ON THE DAY OF OUR EVENT?</h3>
              <p className="text-sm md:text-base text-gray-600">
              Rain or shine, your event is a celebration of your love. Trust us, the rain won't ruin your special day - some of our best shoots have occurred on rainy days. We know lots of wonderful locations that are perfect for pictures in any type of weather condition.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10" data-aos="fade-up">
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">WHAT TYPE OF EQUIPMENT DO YOU USE?</h3>
              <p className="text-sm md:text-base text-gray-600">
                We shoot with Nikon’s top-of-the-line cameras and lenses because we want to capture your special day with the best of the best!
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-2/5">
              <h3 className="text-base font-semibold leading-8 text-gray-700">WE HAVE MORE QUESTIONS. HOW DO WE CONTACT YOU?</h3>
              <p className="text-sm md:text-base text-gray-600">
                Feel free to fill out our <a href="./contact" className="underline">contact form</a>, call us at +234 (90) 444-236-436, or e-mail us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden py-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700">FAQs</h2>
        </div>
        <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
          {data.map((item, i) => (
            <AccordionItem className="accordionItem" key={i} uuid={i}>
              <AccordionItemHeading>
                <AccordionItemButton className="accordionButton">
                  <div className="flex justify-between items-center">
                    <div className="icon">{item.icon}</div>
                    <span className="text-sm w-1/2 text-center">{item.heading}</span>
                    <div className="icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <div className="bg-gradient-to-r from-white to-yellow1">
                <AccordionItemPanel>
                  <p className="text-sm text-darkBlack">{item.detail}</p>
                </AccordionItemPanel>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Faq;

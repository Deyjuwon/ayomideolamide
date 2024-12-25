/* eslint-disable react/no-unescaped-entities */
import mideImg from '../assets/mideP.jpeg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Header from '../components/Header'



const About = () => {


  useEffect(() => {
      AOS.init({duration:2000})
      window.scrollTo(0,0);
  }, [])

  return (
    <div>
      <Header color='text-gray-400' logoColor='text-black' />
      <div className='pt-5 px-5 md:px-4 lg:px-0 flex flex-col gap-10 pb-10' data-aos='fade-up'>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <img src={mideImg} alt="" className='object-cover h-400' /> 
          <div className='md:w-2/4 w-full flex flex-col gap-5'>
            <p className='font-bold text-base '>MEET THE CREATIVE</p>
            <p className='text-gray-500 flex flex-col gap-5 md:text-sm text-sm'><span>Hi, I’m Ayomide – the creative mind behind Ajayi Ayomide Olamide Digital Production(AAODP). With over five years of experience, I’ve transformed fleeting moments into lasting stories through high-quality portraits, event coverage, and creative imagery. My journey began as an Executive Intern at Yemi Kings Photography Academy, where I sharpened my skills and developed a passion for storytelling through visuals.
            </span>
            <span>Since then, I’ve served as Executive Photographer at The Grandeur Hotel VI Lagos, worked on digital projects with the Lagos State Government, and contributed to the RCCG Media Team. Today, I continue to craft exceptional visuals as a freelance photographer, blending creativity with precision to deliver work that resonates with emotion and purpose.
            </span><span>Beyond photography, I’m a Psychology student at the University of Lagos and the founder of AO AJAYIZ GLOBAL ENTERPRISES, specializing in forex trading, real estate, and general merchandise. This blend of artistic and entrepreneurial pursuits underscores my commitment to excellence in all I do. <br />Let’s create something remarkable together!
              </span></p>
          </div>
        </div>
        <div className=' flex flex-col md:flex-row justify-between gap-10 md:px-4 lg:px-44 pb-20 '>
          <div className='flex flex-col gap-5 w-full md:w-full lg:w-2/5'>
            <p className='text-base font-bold '>WORKED FOR AND WITH</p>
            <p className='md:text-sm text-sm text-gray-500'>rerum ut aliquam, quo eum omnis, reprehenderit aperiam, nam iusto, consequuntur ipsa, at harum exercitationem, repellat dolorum quis, unde esse dicta, quia nemo.</p>
          </div>
          <div className='flex flex-col gap-5 w-full lg:w-2/6'>
            <p className='text-base font-bold '>LET'S CREATE</p>
            <p className='md:text-sm  text-sm text-gray-500'>Want to shoot a story, advertisement or something completely different? Contact me through my <Link to='/contact' className='underline'>contact</Link> page.</p>

          </div>

        </div>

        <Footer />
        
      
    </div>

    </div>
    
  )
}

export default About

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
            <p className='text-gray-500 flex flex-col gap-5 md:text-sm text-sm'><span>Ajayi Ayomide Olamide is a penultimate student of the University of Lagos, where he is pursuing a degree in Psychology. Alongside his academic journey, he has developed a strong passion for photography, capturing timeless and meaningful moments for individuals, brands, and organizations. His ability to tell stories through visuals has earned him recognition for delivering high-quality portraits, event coverage, and creative imagery.</span>
            <span>With an eye for detail and a creative approach, Ayomide brings a unique touch to every project he undertakes. He believes that every photograph is more than just an image—it’s a moment frozen in time, meant to be cherished. His work reflects a balance of precision and artistry, ensuring that each shot resonates with emotion and purpose. </span><span>In addition to his photography pursuits, Ayomide is an entreprenuer and actively involved in forex trading, a field that has honed his skills in focus, analysis, and strategic thinking. His dedication to both his creative and analytical interests highlights his versatility and drive to excel in all aspects of his work.</span></p>
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

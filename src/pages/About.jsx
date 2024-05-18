/* eslint-disable react/no-unescaped-entities */
import mideImg from '../assets/mideP.jpeg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const About = () => {

  useEffect(() => {
      AOS.init({duration:2000})
  }, [])

  return (
    <div className='pt-5 px-10 md:px-0 flex flex-col gap-10 pb-16' data-aos='fade-up'>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <img src={mideImg} alt="" className='object-cover h-400' />
          <div className='md:w-2/4 w-full flex flex-col gap-5'>
            <p className='font-bold text-base montserrat'>MEET THE CREATIVE</p>
            <p className='text-gray-500 flex flex-col gap-5 text-sm'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam deserunt veritatis doloribus architecto ut eum optio necessitatibus cupiditate quae quidem facilis, officiis aliquam, rem, pariatur perferendis! Quam, atque doloribus.</span>
            <span>Error eligendi dolor ut fuga cupiditate quas. Fugit nulla alias sit repellat? Omnis reiciendis, corporis odit odio aliquam in!
            Quibusdam eaque placeat commodi assumenda fugiat, rerum ut aliquam quo eum omnis reprehenderit aperiam nam iusto, consequuntur ipsa at harum exercitationem repellat dolorum quis unde esse dicta quia nemo. </span><span>Voluptas unde recusandae rerum repellat mollitia odio quasi nemo, pariatur iure vel labore obcaecati omnis eius eum ut, vitae voluptate, ipsam quos et eos illum atque ducimus quibusdam? Adipisci, deleniti.
            Aliquam cumque</span></p>
          </div>
        </div>
        <div className=' flex flex-col md:flex-row justify-between gap-10 md:px-44 pb-20 '>
          <div className='flex flex-col gap-5 w-full md:w-2/5'>
            <p className='text-base font-bold montserrat'>WORKED FOR AND WITH</p>
            <p className='text-sm text-gray-500'>rerum ut aliquam, quo eum omnis, reprehenderit aperiam, nam iusto, consequuntur ipsa, at harum exercitationem, repellat dolorum quis, unde esse dicta, quia nemo.</p>
          </div>
          <div className='flex flex-col gap-5 w-full md:w-2/6'>
            <p className='text-base font-bold montserrat'>LET'S CREATE</p>
            <p className='text-sm text-gray-500'>Want to shoot a story, advertisement or something completely different? Contact me through my <Link to='./contact' className='underline'>contact</Link> page.</p>

          </div>

        </div>

        <Footer />
        
      
    </div>
  )
}

export default About

import aa4 from '../assets/mide4.jpeg';
import aa8 from '../assets/mide8.jpeg';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2500, once: true });
  }, []);
  return (
    <div>
      
    </div>
    
  );
};

export default Home;

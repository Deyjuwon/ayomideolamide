import './App.css'
import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Concert from './pages/Concert'
import Weddings from './pages/Weddings'
import Sports from './pages/Sports'
import Nature from './pages/Nature'
import Portraits from './pages/Portraits'
import Art from './pages/Art'
import Faq from './pages/Faq'
import Testimonials from './pages/Testimonials'
import Birthdays from './pages/Birthdays'

function App() {


  return (
    <div>
      
      
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/collection/portraits" element={<Portraits />} />
      <Route path="/collection/weddings" element={<Weddings />} />
      <Route path="/collection/sports" element={<Sports />} />
      <Route path="/collection/nature" element={<Nature />} />
      <Route path="/collection/concert" element={<Concert />} />
      <Route path="/collection/art" element={<Art />} />
      <Route path="/collection/birthdays" element={<Birthdays />} />
 
      

     </Routes>
     
      
    </div>

    
     
       
    
  )
}

export default App

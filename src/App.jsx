import './App.css'
import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Header from './components/Header'
import Vintage from './pages/Vintage'
import Weddings from './pages/Weddings'
import Sports from './pages/Sports'
import Nature from './pages/Nature'
import Portraits from './pages/Portraits'



function App() {


  return (
    <div>
      
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/collection/portraits" element={<Portraits />} />
      <Route path="/collection/weddings" element={<Weddings />} />
      <Route path="/collection/sports" element={<Sports />} />
      <Route path="/collection/nature" element={<Nature />} />
      <Route path="/collection/vintage" element={<Vintage />} />
      

     </Routes>

    </div>

    
     
       
    
  )
}

export default App

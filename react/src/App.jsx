import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from "./hooks/Form"
import State from "./hooks/State"
import User from "./User"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Navbar from "./Pages/Navbar"

const App = () => {
  return (
       
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    
  )
}
export default App
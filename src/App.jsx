import { Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home/Index";
import About from "./Pages/About"
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/services' element={<Services />} />
         <Route path='/contact' element={<Contact />} />
      </Routes>
   )
}

export default App

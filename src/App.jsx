import Navbar from "./Navbar";
import Footer from "./Footer"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home"; // Assuming you have a Home component
import{Route, Routes} from "react-router-dom";
function App() {
 

  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
      <Footer />
      
    
    </>
  )
}

export default App;

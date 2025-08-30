import { BrowserRouter,Route,Routes } from "react-router";
import About from '../pages/About/About';

import Blog from '../pages/Blog/Blog';
import Portfolio from '../pages/Portfolio/Portfolio';
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";
import Sidebar from "../component/sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";

export default Routing;

function Routing() {
  return (
   
   <BrowserRouter>
   <main>
   <Sidebar></Sidebar>
   <div className="main-content">

    <Navbar/>
    <Routes>
    
    <Route path="/" element={<About />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Portfolio" element={<Portfolio />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Resume" element={<Resume></Resume>}/>
  
  </Routes>
   </div>

   </main>
   {/* <Routes>
    
      <Route path="/" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Resume" element={<Resume></Resume>}/>
    
    </Routes> */}
   </BrowserRouter>

    
  );
}
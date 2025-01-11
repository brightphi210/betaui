import { useEffect, useState } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import { motion } from "framer-motion";



import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);


  const [isDark, setIsDark] = useState<any>(true)
  const [isNavOpen, setIsNavOpen] = useState(false)

  
  const handleLinkClick = (sectionId : any) => {
    setIsNavOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  

  if (isLoading) {
    return (
     <div className='bg-gradient-to-r from-stone-950 to-neutral-950 h-screen justify-center flex items-center'>
        <span className="loader"></span>
     </div>
    );
  }

  return (
    <div>

      <motion.div
        className="outer-circle lg:block hidden"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />
      <div
        className={`inner-dot lg:block hidden`}
        style={{ top: position.y, left: position.x }}
      />


      <Header isDark={isDark} setIsDark={setIsDark} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} handleLinkClick={handleLinkClick}/>
      <Home isDark={isDark} setIsDark={setIsDark}/>
      <Footer isDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}

export default App

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css';




import AOS from 'aos';
import "aos/dist/aos.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Regiser from "./screens/Regiser";
import About from "./screens/About";
import Preloader from "./components/Preloader";
import Popup from "./components/Popup";
import Contact from "./screens/Contact";



const Routing = () => {
  return (
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Regiser" element={<Regiser />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />

      {/* <Route path="/Menu" element={<Menus />} /> */}


    </Routes>
  );
};

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 

    return () => clearTimeout(timer); 
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out"
    });
  });
  
  return (
    <>
      <Router>
        {loading ? (
          <Preloader /> 
        ) : (
          <>
            <Popup/>
            <Routing />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
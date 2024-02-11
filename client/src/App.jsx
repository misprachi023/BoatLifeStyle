import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";
import MidFooter from "./components/midfooter";
import LastFooter from "./components/lastfooter";
import PersonlizationStyle from "./drawer/personallization";
import Gift from "./drawer/gift";
import Corporate from "./drawer/corporate";
import BlogData from "./components/blogdata";

function App() {
  return (
    <> 
    
      <Navbar />
      
      <Routes> 
        <Route path="/blogs" element={<BlogData />} />
        <Route path="/" element={<Home />} />
        <Route path="/personalisation" element={<PersonlizationStyle/>} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/corporate" element={<Corporate />} />
      </Routes>  
      <Footer />
      <MidFooter />
      <LastFooter />
    </>
  );
}

export default App;

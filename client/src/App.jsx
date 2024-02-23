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
import Login from "./drawer/login";
import UserName from "./drawer/username";

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
        <Route path="/login" element={<UserName />} />
       <Route path="/logout" element={<Login />} />
      </Routes>  
      <Footer />
      <MidFooter />
      <LastFooter />
    </>
  );
}

export default App;

import React from "react";
import Navbar from "./container/navbar/Navbar.jsx";
import Home from "./container/home/home.jsx";
import About from "./container/about/about.jsx";
import Work from './container/work/work.jsx'
import Testimonial from './container/testimonial/testimonial.jsx'
import Contact from './container/contact/contact.jsx'
import Footer from "./container/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
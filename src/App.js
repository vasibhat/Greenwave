import ContactUs from "./components/ContactUs";
// import Services from "./components/Services";
import Header from "./components/Header";
import Features from "./components/Features";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import React from 'react'; // Import React


function App() {
  return (
    <>
      <Header />
      <Home/>
      <AboutUs/>
      <Gallery/>
      <Features />
      {/* <Services/> */}
      <ContactUs/>
    </>
  );
}

export default App;

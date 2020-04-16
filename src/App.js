import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {$,jQuery} from 'jquery';
import "./fonts-faces.css";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import BackToTop from "./components/back-to-top";
// import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <BackToTop />
      <About />
      <Gallery />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

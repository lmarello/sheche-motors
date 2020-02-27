import React from "react";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {$,jQuery} from 'jquery';
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

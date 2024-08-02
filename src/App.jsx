import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
    </>
  );
}

export default App;

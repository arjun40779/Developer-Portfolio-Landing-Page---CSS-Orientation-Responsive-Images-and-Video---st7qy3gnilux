import { Routes, Route } from "react-router-dom";
/* import { useSpring, animated } from "@react-spring/web"; */
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Feedback } from "./components/Feedback";
import { About } from "./components/About";
import { useEffect } from "react";
import "./style.scss";
import "./styles.css";

export default function App() {
  useEffect(() => {
    let mobNav = document.getElementsByClassName("mobile-menu")[0];
    mobNav.style.display = "none";
  });
  return (
    <div className="App">
      <Nav />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

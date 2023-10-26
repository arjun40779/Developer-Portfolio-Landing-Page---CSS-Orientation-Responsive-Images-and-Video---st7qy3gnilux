import { useEffect } from "react";
import { Skills } from "./Skills";
/* 
https://shakuro.com/blog/react-spring-tutorial-making-animated-react-apps */
const Home = () => {
  function apiCall() {
    const p = document.getElementById("quotes");
    const data = fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => (p.innerText = data.quote + "\n- Kanye West"));
  }
  useEffect(() => {
    apiCall();
    console.log("i fire once");
  });
  return (
    <section className="hero" id="Home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm <span className="imp">Arjun Singh</span>. A passionate
            Front-end React Developer based in Gujrat, India.
          </p>
          <div className="hero-icons">
            <a href="https://www.linkedin.com/in/arjun-singh-541554117/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/arjun40779">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="./ArjunSingh.pdf" download="">
              <span>
                <i className="fa-solid fa-file"></i>
              </span>
            </a>
          </div>
          <p id="quotes"></p>
        </div>

        <div className="hero__img">
          <img
            className="hero-img"
            src="https://arjun40779.github.io/portfolio/hero-img.avif"
            alt=""
          />
        </div>
      </div>

      <Skills />
    </section>
  );
};
export default Home;

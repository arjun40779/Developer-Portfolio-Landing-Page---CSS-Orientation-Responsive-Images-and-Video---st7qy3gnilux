const Nav = () => {
  return (
    <nav className="nav__bar ">
      <div className="container">
        {" "}
        <h3 className="initial">Arjun.</h3>
        <ul class="nav-list">
          <li id="home">
            <a href="/">HOME</a>
          </li>
          <li id="about-li">
            <a href="#about">ABOUT</a>
          </li>
          <li id="project-li">
            <a href="#projects">PROJECTS</a>
          </li>
          <li id="contact-li">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;

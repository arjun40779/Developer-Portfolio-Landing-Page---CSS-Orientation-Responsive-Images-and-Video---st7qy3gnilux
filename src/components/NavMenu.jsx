import { Link } from "react-router-dom";
export default function NavMenu(params) {
  function toggle() {
    if (window.innerWidth > 900) {
      return;
    }
    let menu = document.getElementsByClassName("mobile-menu");
    let navlist = document.getElementsByClassName("nav-list");

    menu = menu[0];
    navlist = navlist[0];

    console.log("list", navlist.style.display, "mrnu", menu.style.display);
    if (menu.style.display == "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  }
  const hideNav = (e) => {
    if (e.target.tagName == "LI" || e.target.tagName == "A") {
      toggle();
    }
  };
  return (
    <>
      <i className="fa-solid fa-bars menu-icon" onClick={toggle}></i>
      <ul className={params.className} onClick={hideNav}>
        <li id="home">
          <Link to="/">HOME</Link>
        </li>
        <li id="about-li">
          <Link to="about">ABOUT</Link>
        </li>
        <li id="project-li">
          <Link to="projects">PROJECTS</Link>
        </li>
        <li id="contact-li">
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    </>
  );
}

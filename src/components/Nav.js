import NavMenu from "./NavMenu";
const Nav = () => {
  return (
    <nav className="nav__bar">
      <h3 className="initial">Arjun.</h3>

      <NavMenu className="nav-list" />
      <NavMenu className="mobile-menu" />
    </nav>
  );
};
export default Nav;

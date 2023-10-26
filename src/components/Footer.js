const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a
          aria-label="linkedin"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/arjun-singh-541554117/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/arjun40779"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="resume">
        {" "}
        <a href="./ArjunSingh.pdf" download="">
          <span>
            <i className="fa-solid fa-file"></i>
          </span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;

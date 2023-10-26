import { Feedback } from "./Feedback";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__title">
        <h3>CONTACT</h3>
        <h5>
          Feel free to contact me over email or phone. Always open to discuss
          new ideas!
        </h5>
      </div>
      <div className="contact__content">
        <Feedback />
        <div className="contact__icons">
          <div className="contact__icon-box">
            <a href="tel:7576068348">
              <span>
                <i className="fa-solid fa-mobile"></i>
              </span>
              <div className="contact__info">
                <h5>Phone</h5>
                7576068348
              </div>{" "}
            </a>
          </div>

          {/*   <div className="contact__icon-box">
            <span>
              <i className="fa-solid fa-map-location-dot"></i>
            </span>
            <div className="contact__info">
              <h5>Location</h5>
              Surat, Gujrat
            </div>
          </div> */}

          <div className="contact__icon-box">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arjun40779@gmail.com">
              <span>
                <i className="fa-solid fa-envelope-open-text"></i>
              </span>
              <div className="contact__info">
                <h5>Mail</h5>
                arjun40779@gmail.com
              </div>
            </a>
          </div>

          <div className="contact__icon-box">
            <a href="./resume.pdf" download target="_blank">
              <span>
                <i className="fa-solid fa-file"></i>
              </span>
              <div className="contact__info">
                <h5>Resume</h5>
                download
              </div>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

export function Feedback() {
  const greet = (e) => {
    /*  e.preventDefault(); */
    alert("Thank you for your response!");
  };
  return (
    <div>
      <form
        className="feedback"
        action="https://jmwf8s-3000.csb.app/contact?"
        onSubmit={greet}
      >
        <div className="name">
          <label htmlFor="fname"> Your Name</label>

          <input
            className="fname"
            id="fname"
            type="text"
            placeholder="First name"
          />
          <input
            className="lname"
            id="lname"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="ex: myname@example.com"
            id="email"
          ></input>
        </div>
        <div className="phone">
          <label htmlFor="code">Phone</label>
          <input
            id="code"
            type="text"
            defaultValue="+91"
            className="code"
          ></input>
          <input
            type="tel"
            className="tel-phone"
            placeholder="phone no"
            id="phone"
          ></input>
        </div>
        <input type="submit" id="submit"></input>
      </form>
    </div>
  );
}

export function Feedback() {
  const greet = (e) => {
    alert("Thank you for your response!");
  };
  return (
    <div>
      <form
        action="https://formspree.io/f/xwkdjpok"
        method="POST"
        className="form"
      >
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>

        <button type="submit" id="submit">
          Send
        </button>
      </form>
    </div>
  );
}

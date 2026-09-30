function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>

      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

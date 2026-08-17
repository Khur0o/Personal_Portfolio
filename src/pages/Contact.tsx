function Contact() {
  return (
    <section className="Contact" id="Contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Feel free to reach out for collaborations or project inquiries!</p>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows={6} placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact

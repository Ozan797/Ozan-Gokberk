import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h1>Get In Touch</h1>
      <p>
        I am currently open to new job oppurtunites. You can find my contact
        information below. I'll be sure to get back to you as soon as possible.
      </p>
      <button class={styles.button}>
        <a href="mailto:ozan8@hotmail.co.uk">Contact Me</a>
      </button>
    </section>
  );
}

export default Contact;

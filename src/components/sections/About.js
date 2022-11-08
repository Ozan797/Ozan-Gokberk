import styles from "../styles/About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutcontainer}>
        <p className={styles.title}>About</p>
        <div className={styles.card}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            ipsa, quae exercitationem, qui totam modi, repellendus molestias
            accusantium  nnus reiciendis cupiditate soluta dolore
            ut, repudiandae distinctio labore cumque minima tenetur? Natus
            temporibus officia nulla a dignissimos perspiciatis repellat quae
            illo, est 
          </p>
          <p className={styles.languages}>Known Languages</p>
          <ul className={styles.skills}>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;

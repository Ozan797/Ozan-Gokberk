import styles from "../styles/About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutcontainer}>
        <p className={styles.title}>About</p>
        <div className={styles.card}>
          <p>
            I am currently in my 2nd year of Computer Science. I am ambitious
            and hardworking. Learning is a passion of mine. I am always looking
            for new opportunities to learn and grow. I enjoy reading fictional
            and non fiction books. I also enjoy playing Chess. I started
            learning how to code in 2019 and have been learning ever since. I am
            currently learning backend development using Node.js and Express.js.
            I am also learning how to use MongoDB.
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

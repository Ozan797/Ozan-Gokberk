import styles from "../styles/About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutcontainer}>
        <p className={styles.title}>About</p>
        <div className={styles.card}>
          <p>
            Currently I'm in my 2nd year of Computer Science. I am ambitious
            and hardworking, learning is a passion of mine. I am always looking
            for new opportunities to learn and grow. In my free time i enjoy reading fictional
            and non fiction books. Also, I enjoy playing Chess and have been playing for one year. 
            I started learning how to code in 2019 and have been learning ever since. I am
            currently learning backend development using Node.js and Express.js.
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

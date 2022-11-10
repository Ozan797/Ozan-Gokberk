import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.home__container}>
        <h3 className={styles.intro}>Hi, my name is</h3>
        <div className={styles.name} style={highlight}>
          {/* https://www.geeksforgeeks.org/how-to-create-typewriter-effect-in-reactjs/ */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).typeString("Ozan Gokberk").start();
            }}
          />
        </div>
        <p className={styles.intro}>
          I'm a Computer Science student passionate about
          <span style={highlight}>
            {" "}
            <br /> Web Development
          </span>{" "}
          and
          <span style={highlight}> Machine Learning</span>.
        </p>
      </div>
    </section>
  );
}

const highlight = {
  color: "#FFD60A", // fourth color
};

export default Home;

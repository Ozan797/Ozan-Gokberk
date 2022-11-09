import styles from "../styles/Home.module.css";

function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.home__container}>
        <h3 className={styles.intro}>Hi, my name is</h3>
        <h1 style={highlight} className={styles.name}>
          Ozan Gokberk
        </h1>
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

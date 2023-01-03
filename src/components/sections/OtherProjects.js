import styles from "../styles/OtherProjects.module.css";
import Card from "react-bootstrap/Card";

function OtherProjects() {
  return (
    <section className={styles.smallProjects}>
      <h2 style={h2}>Smaller Projects</h2>
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <Card.Img
            variant="top"
            src="https://www.mca.org.uk/wp-content/uploads/sites/60/2019/02/TFL-Image.jpg"
          />
          <Card.Body>
            <Card.Title>London Underground Application</Card.Title>
            <Card.Text>
              University project consisting of 4 team members. The project was
              to create a Python application that would allow users to find the
              quickest route between two stations on the London Underground
              network. The application was created using the Dijkstra algorithm.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link className={styles.link} href="https://github.com/Ozan797/Algo-Yr2" target="blank_">
              Github
            </Card.Link>
            <Card.Link className={styles.unavailable}>
              Live Demo
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Img
            variant="top"
            src="https://parentzone.org.uk/sites/default/files/styles/parent_zone_hero/public/2022-03/Discord_Card.png?itok=_K-Vcc1H"
          />
          <Card.Body>
            <Card.Title>Discord Clone</Card.Title>
            <Card.Text>
              A project with a friend to create a clone of the Discord welcome page. I
              was responsible for the navbar, footer and the main content of the page.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link className={styles.link} href="https://github.com/Ozan797/Discord-Clone" target="blank_">
              Github
            </Card.Link>
            <Card.Link className={styles.link} href="https://discord-clone-ao.netlify.app/" target="blank_">
              Live Demo
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

const h2 = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#FFD60A",
  paddingTop: "2rem",
  fontFamily: "Montserrat",
};

export default OtherProjects;

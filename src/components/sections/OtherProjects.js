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
            <Card.Link className={styles.unavailable}>
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
            src="https://images.ctfassets.net/8y4on51kf6pi/paypal-logo-image/3db163090e0f348a35b8c1d0fa6164f7/paypal.svg?fm=png&w=1200&h=630&fit=pad&q=100&bg=rgb:003087"
          />
          <Card.Body>
            <Card.Title>Paypal Clone</Card.Title>
            <Card.Text>
              A project with a friend to create a clone of the Paypal website. I
              was responsible for the frontend of the project using HTMl, CSS,
              TypeScript and TailwindCSS.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link className={styles.unavailable}>
              Github
            </Card.Link>
            <Card.Link className={styles.unavailable}>
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

import styles from "../styles/Project.module.css";
function Project() {
  return (
    <section id="projects" className={styles.projects}>
      <h1 style={heading}>My Projects</h1>

      {/* Featured Project */}
      <div className={styles.projectsContainer}>
        <div className={styles.project}>
          <h4 style={h4}>Featured Project</h4>
          <h1 className={styles.title}>Portfolio</h1>
          <div className={styles.projectDesc}>
            <p>
              This is the my portfolio website. I used ReactJS for the frontend.
              By using ReactJS, I can easily create reusable components and
              maintain the code. I used CSS modules for styling.
            </p>
          </div>
          <img
            className={styles.img}
            src="http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
            alt="Featured Project"
          />
          <ul className={styles.skills}>
            <li>HTML & CSS</li>
            <li>ReactJS</li>
          </ul>

          <ul className={styles.links}>
            <li>
              <a href="#github">Github</a>
            </li>
            <li>
              <a href="#home">Live Demo</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const heading = {
  color: "#FFD60A",
  position: "absolute",
  left: "33%",
  paddingTop: "5rem",
  fontFamily: "Montserrat",
  fontWeight: "700",
  fontSize: "2.5rem",
};

const h4 = {
  color: "#FFF",
  fontSize: "12px",
};

export default Project;

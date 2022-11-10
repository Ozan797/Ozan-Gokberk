import styles from "../styles/Project.module.css";
function Project() {
  return (
    <section id="projects" className={styles.projects}>
      {/* Featured Project */}
      <div className={styles.projectsContainer}>
        <h1 className={styles.heading}>My Projects</h1>
        <div className={styles.project}>
          <h4 style={h4}>Featured Project</h4>
          <h1 className={styles.title}>Portfolio</h1>
          <div className={styles.projectDesc}>
            <p>
              This is the my portfolio website. I used ReactJS for the frontend.
              By using ReactJS, I can easily create reusable components and
              maintain the code. I used CSS modules and JavaScript Objects to
              style the components. I also used Bootstrap Components to speed up
              development.
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
            <li style={space}>Bootstrap</li>
          </ul>

          <ul className={styles.links}>
            <li>
              <a href="https://github.com/Ozan797/Ozan-Gokberk" target="blank_">Github</a>
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

const h4 = {
  color: "#FFD60A",
  fontSize: "12px",
};
const space = {
  marginLeft: "12px",
};
export default Project;

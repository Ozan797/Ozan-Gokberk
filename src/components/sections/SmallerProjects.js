import styles from "../styles/SmallerProjects.module.css";

function SmallerProjects() {
  return (
    <section className={styles.smallProjects}>
        <h2>Smaller Projects</h2>
        <div className={styles.smallProjectsContainer}>
            <div className={styles.smallProject}>
                <h3>Project 1</h3>
                <p>Project 1 description</p>
            </div>
        </div>
    </section>
  )
}

export default SmallerProjects
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header>
        <div className={styles.navbar}>
    <input id={styles.menuToggle} type="checkbox" />
    <label className={styles.menuBtn} for={styles.menuToggle}>
      <span></span>
    </label>

    <ul className={styles.menuBox}>
      <li><a className={styles.menuItem} href="#home">Home</a></li>
      <li><a className={styles.menuItem} href="#about">About</a></li>
      <li><a className={styles.menuItem} href="#projects">Projects</a></li>
      <li><a className={styles.menuItem} href="#contact">Contact</a></li>
    </ul>
    <h1 className={styles.logo}>Ozan</h1>
  </div>
    </header>
  )
}

export default Header
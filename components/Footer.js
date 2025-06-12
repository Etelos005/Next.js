import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Creo</a>
        </div>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact-form">Contact</a>
        </div>
        <div className={styles.social}>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
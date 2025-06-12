import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Creo</a>
        </div>
        <div className={`${styles.burger} ${isOpen ? styles.toggle : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </div>
        <ul className={`${styles.navLinks} ${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a href="/" className={`${styles.link} ${styles.linkBlock}`}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={`${styles.link} ${styles.linkBlock}`}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" className={`${styles.link} ${styles.linkBlock}`}>Services</a>
          </li>
          <li className={styles.navItem}>
             <a href="#contact-form" className={`${styles.link} ${styles.linkBlock}`}>Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}
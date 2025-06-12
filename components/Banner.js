import React from 'react'
import styles from '../styles/Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner} id="about">
      <div className={styles.bannerText}>
        <h1>Welcome to the Basics</h1>
      </div>
      <div className={styles.bannerSubtext}>
        Learn how to build a simple, beautiful webpage using only HTML and CSS.
      </div>
    </div>
  )
}
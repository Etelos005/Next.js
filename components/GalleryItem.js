import styles from '@/styles/Gallery.module.css'
import { useState } from 'react'

export default function GalleryItem({ src, alt, text, desc }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className={styles.galleryItem} onClick={() => setShowModal(true)}>
        <img src={src} alt={alt} />
        <p>{text}</p>
      </div>

      {showModal && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={src} alt={alt} />
            <p>{desc}</p>
            <span className={styles.close} onClick={() => setShowModal(false)}>Close</span>
          </div>
        </div>
      )}
    </>
  )
}
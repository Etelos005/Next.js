import { useState } from 'react'
import styles from '@/styles/ContactForm.module.css' // Adjust path if not using `@`

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Please enter your full name!'
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address!'
    }
    if (!form.message.trim()) newErrors.message = 'Please enter your message!'

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      setSubmitted(true)
    }
  }

  return (
    <section className={styles.sectionWrapper} id="contact-form">
      <form className={styles.form} onSubmit={handleSubmit}>
        {!submitted ? (
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={styles.input}
            />
            <div className={styles.error}>{errors.name}</div>

            <input
              type="email"
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
            <div className={styles.error}>{errors.email}</div>

            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={styles.textarea}
            />
            <div className={styles.error}>{errors.message}</div>

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        ) : (
          <div className={styles.thankYou}>
            Thank you for your message! Enjoy your day and have a wonderful week!
          </div>
        )}
      </form>
    </section>
  )
}

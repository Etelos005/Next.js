import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
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
    <section id="contact-form" className="w-full bg-[#f4f4f4] py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-[600px] mx-auto p-8 rounded-lg shadow-md"
      >
        {!submitted ? (
          <div className="flex flex-col gap-4">
            <input
              id="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded text-black"
            />
            {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}

            <input
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded text-black"
            />
            {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}

            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded text-black"
            />
            {errors.message && <div className="text-red-600 text-sm">{errors.message}</div>}

            <button
              type="submit"
              className="bg-[#004466] hover:bg-[#00334d] text-white py-3 rounded transition"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="text-center text-[#004466] font-bold text-xl">
            Thank you for your message! Enjoy your day and have a wonderful week!
          </div>
        )}
      </form>
    </section>
  )
}

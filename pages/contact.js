import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const validate = () => {
    let tempErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) tempErrors.name = 'Please enter your full name!'
    if (!formData.email.trim()) tempErrors.email = 'Please enter your email.'
    else if (!emailRegex.test(formData.email)) tempErrors.email = 'Please enter a valid email!'
    if (!formData.message.trim()) tempErrors.message = 'Please enter your message!'

    return tempErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const tempErrors = validate()
    setErrors(tempErrors)

    if (Object.keys(tempErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <>
      <div
        className="bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center px-6 sm:px-0"
        style={{
          backgroundImage: `url('/Images/call operators.jpg')`
        }}
      >
        <div className="bg-black/60 px-8 py-6 rounded-lg mb-4">
          <h1 className="text-white text-4xl font-bold font-sans">Get in Touch</h1>
        </div>
        <div className="bg-white/70 text-[#333] font-sans px-6 py-4 rounded-md text-lg shadow-lg mt-4 sm:mt-0 max-w-[600px]">
          Do you have a question or want to work together? Fill out the form and I’ll get back to you as soon as possible amigo!
        </div>
      </div>

      <section className="py-20 px-6 bg-gray-50 font-sans">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-[#004466] mb-8 text-center">Contact Form</h2>

          {submitted ? (
            <div className="flex justify-center">
              <p className="text-[#004466] text-lg font-semibold text-center animate-fade-in">
                Thank you for your message! Enjoy your day and have a wonderful week! We will get back to you as soon as possible! 
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004466]/50 outline-none text-[#333] font-sans placeholder:text-gray-400"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004466]/50 outline-none text-[#333] font-sans placeholder:text-gray-400"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004466]/50 outline-none text-[#333] font-sans placeholder:text-gray-400 resize-y"
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#004466] text-white px-6 py-3 rounded-md hover:bg-[#00334d] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

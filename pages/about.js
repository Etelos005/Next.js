export default function About() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center px-6 sm:px-0"
        style={{
          backgroundImage: `url('/Images/Q-marks.jpg')`
        }}
      >
        <div className="bg-black/60 px-8 py-6 rounded-lg mb-4">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
        <div className="bg-white/5S text-gray-800 px-6 py-4 rounded-md text-lg shadow-lg mt-4 sm:mt-0 max-w-[600px]">
          Learn more about how to create a Next.js. Not only just that, how to apply Tailwind Css on our project and link the pages together.
        </div>
      </div>

      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">Who Am I</h2>
        <p className="text-gray-700 leading-7">
          A third-year Computer and Communication Engineering student specializing in multimedia, with a strong interest in digital content creation, graphic design, video editing, and UI/UX development. Skilled in Adobe Illustrator, Blender, and Figma, I have experience in animation, video production, and interactive media design. I am seeking opportunities to apply technical knowledge and creativity to real-world multimedia and engineering applications.
        </p>
      </section>
    </>
  )
}

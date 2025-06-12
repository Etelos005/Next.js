export default function Banner() {
  return (
    <div
      id="about"
      className="bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://www.elegantthemes.com/blog/wp-content/uploads/2013/09/bg-11-full.jpg')`
      }}
    >
      <div className="bg-black/60 px-8 py-6 rounded-lg mb-4">
        <h1 className="text-white text-4xl font-bold">Welcome to the Basics</h1>
      </div>
      <div className="bg-white/90 text-gray-800 px-6 py-4 rounded-md text-lg shadow-lg">
        Learn how to build a simple, beautiful webpage using only HTML and CSS.
      </div>
    </div>
  )
}

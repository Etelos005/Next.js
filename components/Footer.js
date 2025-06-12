export default function Footer() {
  return (
    <footer className="bg-[#004466] text-white py-10">
      <div className="max-w-[1320px] mx-auto px-4 flex flex-wrap justify-between items-center gap-6 text-center md:text-left">
        <div className="text-2xl font-bold">
          Creo
        </div>

        <div className="flex gap-5">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact-form" className="hover:text-yellow-400">Contact</a>
        </div>

        <div className="flex gap-5">
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Twitter</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

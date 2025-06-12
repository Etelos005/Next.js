export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-text py-10">
      <div className="max-w-[1320px] mx-auto px-4 flex flex-wrap justify-between items-center gap-6 text-center md:text-left">
        <div className="text-2xl font-bold">Creo</div>

        <div className="flex gap-5">
          <a href="#about" className="hover:text-brand-accent transition">About</a>
          <a href="#services" className="hover:text-brand-accent transition">Services</a>
          <a href="#contact-form" className="hover:text-brand-accent transition">Contact</a>
        </div>

        <div className="flex gap-5">
          <a href="#" className="hover:text-brand-accent transition">Facebook</a>
          <a href="#" className="hover:text-brand-accent transition">Twitter</a>
          <a href="#" className="hover:text-brand-accent transition">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

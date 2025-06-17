export default function Banner({ title, description, backgroundImage, titleColor, descColor, overlay }) {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center px-6 py-12 sm:px-0 overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay} z-0`} />

      <div className="relative z-10 max-w-xl animate-fade-in">
        <div className="bg-black/40 px-10 py-6 rounded-xl shadow-lg backdrop-blur-md mb-6">
          <h1 className={`text-4xl md:text-5xl font-extrabold leading-tight tracking-wide ${titleColor}`}>
            {title}
          </h1>
        </div>

        <div className={`mt-2 text-lg sm:text-xl font-normal leading-relaxed px-4 sm:px-0 ${descColor}`}>
          {description}
        </div>
      </div>
    </div>
  )
}

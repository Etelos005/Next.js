export default function Banner({ title, description, backgroundImage }) {
  return (
    <div
  className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center px-6 py-12 sm:px-0 overflow-hidden"
  style={{
    backgroundImage: `url('${backgroundImage}')`
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

  <div className="relative z-10 max-w-xl animate-fade-in">
    <div className="bg-primaryDark/80 px-10 py-6 rounded-xl shadow-xl backdrop-blur-md mb-6">
      <h1 className="text-[#ffd479] text-4xl md:text-5xl font-extrabold leading-tight tracking-wide drop-shadow-md">
        {title}
      </h1>
    </div>

    <div className="mt-4 text-[#f5e9d4] text-lg sm:text-xl font-light leading-relaxed tracking-tight drop-shadow-md px-4 sm:px-0">
      {description}
    </div>
  </div>
</div>

  )
}

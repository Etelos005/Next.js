export default function Banner({ title, description, backgroundImage }) {
  return (
    <div
      className="bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center px-6 sm:px-0"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="bg-black/60 px-8 py-6 rounded-lg mb-4">
        <h1 className="text-white text-4xl font-bold font-sans">{title}</h1>
      </div>
      <div className="bg-white/70 text-[#333] font-sans px-6 py-4 rounded-md text-lg shadow-lg mt-4 sm:mt-0 max-w-[600px]">
        {description}
      </div>
    </div>
  )
}

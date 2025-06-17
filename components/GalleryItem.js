import { useState } from 'react'

export default function GalleryItem({ src, alt, text, desc }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="w-[250px] bg-[#f9f9f9] text-center p-5 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
      >
        <img src={src} alt={alt} className="w-full h-[180px] object-cover rounded-lg" />
        <p className={`${open ? 'mt-6' : 'mt-3'} font-medium text-black`}>{text}</p>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[2000]"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-[600px] w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} className="w-full h-[300px] object-cover rounded-md" />
            <p className="mt-4 text-gray-700">{desc}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-2 bg-[#004466] text-white rounded-md hover:bg-[#00334d] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}



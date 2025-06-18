import Image from 'next/image'

export default function GalleryItem({ src, alt, text, desc, priority }) {
  return (
    <div className="bg-gray-100 rounded-xl shadow-md p-6 w-72 text-center hover:shadow-lg transition">
      <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
        />
      </div>
      <h3 className="text-xl font-semibold text-[#004466] mb-2">{text}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  )
}

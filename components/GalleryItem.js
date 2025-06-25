import Image from 'next/image'
import Link from 'next/link'

export default function GalleryItem({ src, alt, text, desc, priority }) {
  const route = alt.toLowerCase().includes('code')
    ? '/gallery/code'
    : alt.toLowerCase().includes('website')
    ? '/gallery/website'
    : alt.toLowerCase().includes('dog')
    ? '/gallery/dog'
    : '#'

  return (
    <Link href={route}>
      <div className="bg-gray-100 rounded-xl shadow-md p-6 w-72 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[350px]">
        <div className="relative w-full h-44 mb-4 rounded-md overflow-hidden group">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={priority}
          />
        </div>
        <h3 className="text-xl font-semibold text-[#004466] mb-2">{text}</h3>
        <p className="text-gray-700 text-sm">{desc}</p>
      </div>
    </Link>
  )
}

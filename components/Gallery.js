import GalleryItem from './GalleryItem'

export default function Gallery({ items }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#004466] mb-12">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {items.map((item, index) => (
            <GalleryItem
              key={index}
              src={item.src}
              alt={item.alt}
              text={item.text}
              desc={item.desc}
              href={item.href}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

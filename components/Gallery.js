import GalleryItem from './GalleryItem'

export default function Gallery() {
  const items = [
    {
      src: '/Images/codes.jpg',
      alt: 'Code photo',
      text: 'This is a code photo',
      desc: 'Front end needs coding, you are a Senior Frontend Developer after all Maria.'
    },
    {
      src: '/Images/website.jpg',
      alt: 'Website photo',
      text: 'This is a website photo',
      desc: 'It’s where art meets technology. Nowadays everything has a website.'
    },
    {
      src: '/Images/dog.jpg',
      alt: 'Dog photo',
      text: 'This is a dog photo',
      desc: 'This is Saadoun. Cute but an idiot as well. I hope you like dogs Maria.'
    }
  ]

  return (
    <section id="services" className="w-full bg-white py-14 px-6 flex flex-wrap justify-center gap-10">
      {items.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </section>
  )
}

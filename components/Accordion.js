import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left flex justify-between items-center text-lg font-medium text-white hover:text-[#ffa500] transition-colors"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180 text-[#ffa500]' : 'rotate-0'
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-white leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

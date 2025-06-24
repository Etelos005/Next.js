import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-gray-700">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={index} className="py-4">
            <button
              onClick={() => toggle(index)}
              className={`w-full text-left flex justify-between items-center text-lg font-medium transition-colors ${
                isOpen ? 'text-[#ffa500]' : 'text-white hover:text-[#ffa500]'
              }`}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#ffa500]' : 'rotate-0 text-white'
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-white leading-relaxed">{item.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

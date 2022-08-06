import React, {useState, useEffect} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { client, urlFor } from '../../pages/client.js'

const Testimonials = () => {
  const handleClick = ( index ) => {
    setCurrentIndex(index)
  }

  const { theme } = useTheme();
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const query = '*[_type == "testimonials" ]';
    
    client.fetch(query).then((data) => {
      setTestimonials(data)
    })
  }, [])
  
  
  const test = testimonials[currentIndex];
  
  return (
    <div className="flex items-center w-full flex-col">
      {testimonials.length && (
        <>
        <div className={`w-[60%] min-h-[320px] mt-16  flex flex-col p-5 rounded-2xl --tw-shadow-color: #fff ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}>
          <Image src={`${urlFor(test.imgurl)}`} 
          layout="fixed"
          width={100}
          height={100}
          className="rounded-full"
          objectFit="cover"
          alt="testimonial" />
          <div className="flex flex-col justify-center flex-start flex-1 h-full">
            <p className='text-xl lg:text-2xl'>{test.feedback}</p>
            <div>
              <h4 className="font-bold">{test.name}</h4>
            </div>
          </div>
        </div>

        <div className="">
          <div 
          className=""
          onClick={() => 
          handleClick(
            currentIndex === 0
            ? testimonials.length - 1
            : currentIndex - 1
          )}
          >
            <HiChevronLeft />
          </div>
          <div
          className=""
          onClick={() => 
          handleClick(
            currentIndex === testimonials.length - 1
            ? 0 
            : currentIndex + 1 
          )}
          >
            <HiChevronRight  />
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Testimonials
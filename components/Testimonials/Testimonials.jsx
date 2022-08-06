import React, {useState, useEffect} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image';

import { client, urlFor } from '../../pages/client.js'

const Testimonials = () => {

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
    <>
      {testimonials.length && (
        <>
        <div className="w-[60%] min-h-[320px] flex flex-col p-5 rounded-2xl">
          <Image src={`${urlFor(test.imgurl)}`} 
          layout="fixed"
          width={100}
          height={100}
          className="rounded-full"
          objectFit="cover"
          alt="testimonial" />
          <div>
            <p>{test.feedback}</p>
            <div>
              <h4>{test.name}</h4>
            </div>
          </div>
        </div>

        <div className="">

        </div>
        </>
      )}
    </>
  )
}

export default Testimonials
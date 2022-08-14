import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { urlFor, client } from '../../pages/client'
import { useTheme } from 'next-themes'


const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { theme } = useTheme()
 
  useEffect(() => {
    const query = '*[_type == "gallery" ]';

    client.fetch(query)
    .then((data) => {
      setGallery(data);
    })
  }, [])
  
  const desc = gallery[currentIndex]

  return (
    <div id="gallery" className='flex flex-col justify-center'>
          {gallery.map((gallery, index) => (
                <div className={`w-[25%] sm:w-[55%] min-h-[400px] shadow-xl flex flex-col rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}
                key={gallery.name + index}
                >
                <Image src={`${urlFor(gallery.imgUrl)}`} alt="haircut"
                    height={500}
                    width={500}
                    className="rounded-xl"
                    objectFit="cover"
                 />
                 </div>
            ))}
    </div>
  )
}

export default Gallery
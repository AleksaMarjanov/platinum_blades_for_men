import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'


import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import AppWrap from './../Wrapper/AppWrap';
import MotionWrap from '../Wrapper/MotionWrap'
import { client, urlFor } from '../client'

const Gallery = () => {

  const handleClick = ( index ) => {
    setCurrentIndex(index)
  }

  const zoomInOnClick = () => {

  }

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
    <div id="gallery" className='flex flex-col items-center justify-center' onClick={() => {}}>
                   <div>
            <motion.div
            whileInView={{ x: [-300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="mb-16 flex justify-center items-center text-6xl sm:text-5xl sm:justify-center sm:items-center">
                GALLERY{" "}
            </motion.div>
            </div>
          {gallery.length &&  (
                <div className={`w-full min-h-[320px] shadow-xl flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}
                >
                <Image src={`${urlFor(desc.imgUrl)}`} alt="haircut"
                    height={500}
                    width={500}
                    className=" shadow-xl rounded-lg"
                    objectFit="cover"
                 />
                 </div>
            )}
            
        <div className="flex flex-row mt-3 rounded-full m-5 sm:mb-5">
          <div 
          className=""
          onClick={() => 
          handleClick(
            currentIndex === 0
            ? gallery.length - 1
            : currentIndex - 1
          )}
          >
            <HiChevronLeft className="w-[40px] h-[40px] dark:bg-slate-500 bg-slate-300 rounded-full mr-3 hover:bg-slate-400  dark:hover:bg-slate-700 cursor-pointer"/>
          </div>
          <div
          className=""
          onClick={() => 
          handleClick(
            currentIndex === gallery.length - 1
            ? 0 
            : currentIndex + 1 
          )}
          >
            <HiChevronRight  className="w-[40px] h-[40px] dark:bg-slate-500 bg-slate-300 rounded-full ml-3 hover:bg-slate-400 dark:hover:bg-slate-700 cursor-pointer"/>
          </div>
        </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Gallery, "gallery"))
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
    // <div id="gallery" className='flex flex-col items-center justify-center mt'>
    <div id="gallery" className='mt-10'>
          {gallery.length &&  (
            <>
             <div>
            <motion.div
            whileInView={{ x: [-300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="font-poppins flex mb-16 sm:mb-4 justify-center items-center text-6xl lg:text-3xl md:text-3xl sm:text-2xl">
                GALLERY{" "}
            </motion.div>
            </div>
                <div className={`w-full shadow-xl flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}
                >
                <div className='relative  xl:pl-3 sm:h-[270px] sm:w-[270px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px] xl:h-[1000px] xl:w-[1000px]'>

                <Image src={`${urlFor(desc.imgUrl)}`} alt="haircut"
                    // height={400}
                    // width={400}
                    className=" rounded-lg"
                    objectFit="contain"
                    layout='fill'
                 />
                </div>
                 </div>
            </>
            )}
            
        <div className="flex flex-row items-center justify-center mt-3 rounded-full m-5 sm:mb-5">
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
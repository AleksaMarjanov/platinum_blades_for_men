import React from 'react'
import AppWrap from './../Wrapper/AppWrap';
import MotionWrap from '../Wrapper/MotionWrap'
import ServiceCard from '../ServiceCard/ServiceCard';
import {motion} from 'framer-motion'


const Services = () => {
  

  return (
    <div id="services" className='mt-10'>
           <div>
            <motion.div
            whileInView={{ x: [-300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="font-poppins flex mb-16 md:mb-8 sm:mb-0 justify-center items-center text-6xl lg:text-3xl md:text-3xl sm:text-3xl"
                >
                SERVICES{" "}
            </motion.div>
            </div>
        <ServiceCard/>
    </div>

  )
}

export default AppWrap(MotionWrap(Services, 'services'))
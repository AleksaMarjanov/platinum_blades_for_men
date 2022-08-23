import React from 'react'
import AppWrap from './../Wrapper/AppWrap';
import MotionWrap from '../Wrapper/MotionWrap'
import ServiceCard from '../ServiceCard/ServiceCard';
import {motion} from 'framer-motion'


const Services = () => {
  

  return (
    <div id="services" className='sm:mt-10'>
           <div>
            <motion.div
            whileInView={{ x: [-300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="mb-16 flex justify-center items-center text-6xl sm:text-5xl sm:justify-center sm:items-center"
                >
                SERVICES{" "}
            </motion.div>
            </div>
        <ServiceCard/>

    </div>

  )
}

export default AppWrap(MotionWrap(Services, 'services'))
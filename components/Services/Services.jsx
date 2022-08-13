import React from 'react'
import AppWrap from './../Wrapper/AppWrap';
import MotionWrap from '../Wrapper/MotionWrap'
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
  

  return (
    <div id="services" className='justify-center items-center sm:flex-col'>
        <ServiceCard />
        <ServiceCard />

        <p>Beard Trimms + Line up $30</p>
        <p>Steaming hot shave + Line up $55</p>
        <p>Facial Shave $30</p>
        <p>Hot towel shave + Line up $45</p>
        <p>Goat-T $15</p>
    </div>

  )
}

export default AppWrap(MotionWrap(Services, "services"))
import React from 'react'
import Image from 'next/image';
import images from '../../assets';
import AppWrap from './../Wrapper/AppWrap';
import MotionWrap from '../Wrapper/MotionWrap'

const Services = () => {
  return (
    <div className='flex flex-col justify-start items-start font-poppins font-bold text-4xl'>
        <p>Hair Cut $40</p>
        <p>Beard Trimms + Line up $30</p>
        <p>Steaming hot shave + Line up $55</p>
        <p>Facial Shave $30</p>
        <p>Hot towel shave + Line up $45</p>
        <p>Goat-T $15</p>
    </div>

  )
}

export default AppWrap(MotionWrap(Services, "services"))
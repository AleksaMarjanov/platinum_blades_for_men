import React from 'react'
import Image from 'next/image'
import images from '../../assets'
import AppWrap from './../Wrapper/AppWrap';
import MotionWrap from '../Wrapper/MotionWrap';

const About = () => {
  return (
    <>
    <div id="about" className="font-poppins text-4xl flex justify-start">
    AT PLATINUM BLADES, WE<br/> BELIEVE THAT, AT ITS BEST,<br/>
      A BARBERSHOP IS A <br/>DEPENDABLE, TRUSTED<br/>NEIGHBORHOOD INSTITUTION.
    </div>
    <div>
        <Image src={images.about1} alt="work hairstyle" width={400} height={1000} objectFit="contain" />
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(
    About,
    "about"
  ))
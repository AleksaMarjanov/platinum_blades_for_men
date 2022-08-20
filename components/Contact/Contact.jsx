import React from 'react'
import MotionWrap from '../Wrapper/MotionWrap';
import AppWrap from './../Wrapper/AppWrap';


const Contact = () => {
  return (
    <div id="contact">
      <h2 className='flex justify-center items-center font-poppins text-4xl'>
        Gift cards available for in store purchase
      </h2>
    </div>
  )
}

export default AppWrap(MotionWrap(Contact, "contact"))
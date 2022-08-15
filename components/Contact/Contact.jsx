import React from 'react'
import MotionWrap from '../Wrapper/MotionWrap';
import AppWrap from './../Wrapper/AppWrap';


const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default AppWrap(MotionWrap(Contact, "contact"))
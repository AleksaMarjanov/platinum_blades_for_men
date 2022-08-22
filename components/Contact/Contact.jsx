import React, {useState, useEffect} from 'react'
import MotionWrap from '../Wrapper/MotionWrap';
import AppWrap from './../Wrapper/AppWrap';
import dynamic from 'next/dynamic';


const Map = dynamic(() => import('../Map/Map'), {
  ssr: false,
});

const Contact = () => {


  return (
    <>
    <div>
      <h2 className='flex flex-col justify-center items-center font-poppins text-4xl'>
        Gift cards available for in store purchase
      </h2>
       <div id="map"  className='hidden xl:inline-flex xl:min-w-[600px] mt-5 h-[500px] w-[500px]'>
       <div id="map">   
          <Map />
       </div>
    </div>
    </div>
    </>
  )
}

export default AppWrap(MotionWrap(Contact, "contact"))
import React from 'react'
import { Banner, Button } from '../components'

const Home = () => {
  return (
    <div className="flex justify-center sm:px-4 p-12">
    <div className="w-full rounded-xl minmd:w-4">
         <Banner
      // Text you wish to edit >...
          name={<>Your Ultimate Grooming <br />Experience</>}
        // text inside the banner
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
        // actual banner style
          parentStyle="justify-center mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl font-poppins"
          
        />
      
    </div>
    </div>
  )
}

export default Home

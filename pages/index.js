import React from 'react'
import { Banner} from '../components'
import Testimonials from './../components/Testimonials/Testimonials';
import About from './../components/About/About';
import Gallery from './../components/Gallery/Gallery';
import Services from './../components/Services/Services';
import Contact from './../components/Contact/Contact';

const Home = () => {
  return (
    <div className="flex justify-center sm:px-4 p-0">
    <div className="w-full rounded-xl minmd:w-4">
         <Banner
      // Text you wish to edit >...
          name={<>Your Ultimate Grooming <br />Experience</>}
        // text inside the banner
          childStyles="md:text-4xl sm:text-xl xs:text-lg text-left"
        // actual banner style
          parentStyle="justify-center mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl font-poppins"
          
        />
      <Testimonials />
      <About />
      <Gallery />
      <Services />
      <Contact />
    </div>
    </div>
  )
}

export default Home

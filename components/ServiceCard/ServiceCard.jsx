import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes';

import { urlFor, client } from '../../pages/client';
import AppWrap from './../Wrapper/AppWrap';
import MotionWrap from '../Wrapper/MotionWrap';

const ServiceCard = ({ isMobile }) => {
    const [services, setServices] = useState([])
    const { theme } = useTheme();
  
    useEffect(() => {
        const query = '*[_type == "services" ]';
    
        client.fetch(query) 
        .then((data) => {
          setServices(data);
        })
      }, [])
      
    return(
      <div id="services" className='container mx-auto py-36 px-8 items-center justify-center flex'>
        <div className={`grid md:grid-cols-1 grid-cols-2 gap-6 `}>
        {services.map((service,index ) => (
          <div className={`shadow-xl w-full aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ${theme === 'dark' ? 'bg-nft-black-2' : 'bg-white'}`} key={service.name + index}>
            <Image 
            src={`${urlFor(service.imgurl)}`}  
            width={300}
            height={300}
            objectFit="cover"
            alt="services"
            className='rounded-lg'
            />
            <div className=" p-5">
            <h3 className='absolute top-[320px] md:top-[330px] xs:top-[250px] text-3xl sm:text-xl xs:text-xl font-poppins font-bold text-slate-700'>{service.name}</h3>
            <p className=' absolute top-[400px] sm:top-[390px] xs:top-[330px] xs:text-sm p-3 leading-relaxed'>{service.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    )}
    
    export default ServiceCard


    
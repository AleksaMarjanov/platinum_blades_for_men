import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes';

import { urlFor, client } from '../../pages/client';

const ServiceCard = () => {
    const [services, setServices] = useState([])
    const { theme } = useTheme();
  
    useEffect(() => {
        const query = '*[_type == "services" ]';
    
        client.fetch(query)
        .then((data) => {
          setServices(data);
        })
      }, [])
      
      
      return (
        // <div className=' flex-1 space-x-8 space-y-1 p-4 sm:flex-col sm:space-y-4 justify-center items-center'>
          <div className='flex flex-row w-full sm:flex-col mb-5 justify-center items-center p-4 sm:space-y-4' >
            {services.map((service, index) => (
                <div className={`w-[25%] sm:w-[55%] md:w-[40%] min-h-[320px] shadow-xl flex flex-col rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}
                key={service.name + index}
                >
                <Image src={`${urlFor(service.imgurl)}`} alt="haircut"
                    height={400}
                    width={400}
                    className="rounded-xl"
                    objectFit="cover"
                 />
            <div className="flex flex-col justify-center items-center">
             <h4 className="font-bold mt-5 sm:mt-2 sm:m-2">{service.name}</h4>
            <p className='text-md lg:text-xl p-2 '>{service.description}</p>
            <div>
            </div>
           </div>
                </div>
            ))}
         </div>
        // </div>
        )
    }
    
    export default ServiceCard
    
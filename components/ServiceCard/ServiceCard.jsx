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
      })
      
      
      return (
        <div id="services" className='flex flex-1 mb-5 space-x-8 justify-center items-center w-full flex-row'>
            {services.map((service, index) => (
                <div className={`w-[40%] max-h-[560px] shadow-xl flex flex-col p-3 rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}
                key={service.name + index}
                >
                <Image src={`${urlFor(service.imgurl)}`} alt="haircut"
                    height={500}
                    width={500}
                    className="rounded-xl"
                    objectFit="cover"
                 />
            <div className="flex flex-col justify-center items-center">
             <h4 className="font-bold mt-5">{service.name}</h4>
            <p className='text-sm lg:text-xl'>{service.description}</p>
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
    
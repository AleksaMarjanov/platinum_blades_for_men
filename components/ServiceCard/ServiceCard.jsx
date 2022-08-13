import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes';

import { urlFor, client } from '../../pages/client';

const ServiceCard = () => {
    const [services, setServices] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const { theme } = useTheme();
  
    useEffect(() => {
        const query = '*[_type == "services" ]';
    
        client.fetch(query)
        .then((data) => {
          setServices(data);
        })
      })
    
      const desc = services[currentIndex]
    
    return (
    <div>
      {services.length && (
        <div className={`w-[20%] min-h-[160px] shadow-xl flex flex-col p-3 rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}
        >
        {desc.imgurl && (
          <Image src={`${urlFor(desc.imgurl)}`} alt="haircut"
          height={200}
          width={200}
          className="rounded-xl"
          objectFit="cover"
        />
        )}
        <div className="flex flex-col justify-center items-center">
              <h4 className="font-bold mt-5">{desc.name}</h4>
            <p className='text-sm lg:text-xl'>{desc.description}</p>
            <div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceCard

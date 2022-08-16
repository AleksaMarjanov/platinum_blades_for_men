import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes';

import { urlFor, client } from '../../pages/client';

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
      <div className='grid grid-rows-3 grid-flow-col gap-8  w-full justify-center items-center'>
        {services.map((service,index) => (
          <div key={service.name + index}>
            <Image 
            src={`${urlFor(service.imgurl)}`} alt="services"
            width={400}
            height={400}
            objectFit="cover"
            className='rounded-xl'
            />
          </div>
        )) }
      </div>
    )
        }
    export default ServiceCard


    //   return (
    //       <div className='flex flex-col mb-5 justify-center items-center p-4 space-x-0 space-y-8 md:space-y-0 sm:space-y-8 ' >
    //         {/* //  <div className="grid grid-rows-3 grid-flow-col sm:grid-flow-row gap-8  items-center justify-center w-full">   */}
    //         {services.map((service, index) => (
    //             <div className={`w-[55%] sm:w-[300px] min-h-[320px] shadow-xl flex flex-col rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}
    //             key={service.name + index}
    //             >
    //             <Image src={`${urlFor(service.imgurl)}`} alt="haircut"
    //                 height={400}
    //                 width={400}
    //                 className="rounded-xl w-full"
    //                 objectFit="cover"
    //              />
    //         <div className="flex flex-col justify-center flex-start  p-8 sm:h-[50%]">
    //          <h4 className="font-bold mt-5">{service.name}</h4>
    //         <p className='text-md lg:text-xl p-2 '>{service.description}</p>
    //         <div>
    //         </div>
    //        </div>
    //             </div>
    //         ))}
    //      </div>
    //     // </div>
    //     )
    // }
    
    
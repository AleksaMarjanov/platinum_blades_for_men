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
          <div className='flex justify-center items-center text-gray-600'>
              <div className='container px-5 py-24 mx-auto'>
                    <div className="flex flex-wrap -m-4">
                        <div className='w-full p-4 gap-8 grid grid-flow-col grid-rows-3'>
                                {services.map((service,index) => (
                                  <div key={service.name + index} className="flex flex-col items-center justify-center rounded-lg ">
                                  <Image 
                                  src={`${urlFor(service.imgurl)}`}  
                                  alt='services' 
                                  objectFit='cover'  
                                  width={400}
                                  height={400}
                                  loading="lazy"
                                  className='object-center object-cover'
                                  />
                                  <div className={`flex flex-col items-center justify-center p-6 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-nft-red-violet'}  transition duration-300 ease-in`}>
                                    <h1 className='text-2xl font-semibold mb-3'>{service.name}</h1>
                                      <div className='w-[70%]'>
                                        <p className='leading-relaxed mb-3'>{service.description}</p>
                                      </div>
                                  </div>
                                  </div>
                                ))}  
                        </div>
                    </div>
              </div>
          </div>
    )}
    
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
    
    
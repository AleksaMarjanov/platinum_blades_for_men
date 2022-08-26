import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { client, urlFor } from '../client'
import {motion} from 'framer-motion'
import { useRouter } from "next/router";
import Link  from 'next/link';

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const query = '*[_type == "services" ]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center text-gray-600">
      <div className="container px-5 py-12 sm:py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 gap-8 sm:p-2 sm:gap-4 grid grid-flow-col grid-rows-4 sm:flex sm:flex-col md:flex md:flex-col sm:items-center sm:justify-center">
            {services.map((service, index) => (
              <div
                key={service.name + index}
                className={`flex flex-col ${
                  theme === "dark" ? "bg-nft-black-2" : "bg-white"
                } items-center justify-between rounded-lg shadow-xl`}
              > 
                <Image
                  src={`${urlFor(service.imgurl)}`}
                  alt="services"
                  objectFit="cover"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="object-center object-cover flex items-center justify-center"
                />
                <div
                  className={`xl:w-[55%] w-[60%] sm:w-full font-poppins font-bold flex flex-col items-center justify-center p-6 ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-nft-red-violet  transition duration-300 ease-in`}
                >
                  <h1 className="text-2xl font-semibold mb-3 lg:text-md md:text-2xl sm:text-lg">
                    {service.name}
                  </h1>
                    <p className="leading-relaxed mb-3 lg:text-2xl md:text-xl sm:text-sm sm:font-semibold">
                      {service.description}
                    </p>
                </div>
                <div className="mb-5" >
                <Link href='http://platinumbladesformen.booksy.com/' target="_blank">
                <motion.button
                  className="box bottom-3 xs:m-2  font-poppins font-bold text-white sm:text-xs sm:font-semibold sm:pt-2 sm:mb-5 rounded-full md:bottom-3 lg:bottom-3 nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                Schedule an appointment
                </motion.button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

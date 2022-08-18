import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { urlFor, client } from "../../pages/client";
import {motion} from 'framer-motion'
import { useRouter } from "next/router";

const ServiceCard = ({ isMobile }) => {
  const [services, setServices] = useState([]);
  const { theme } = useTheme();
  const { router } = useRouter();

  useEffect(() => {
    const query = '*[_type == "services" ]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 gap-8 grid grid-flow-col grid-rows-3">
            {services.map((service, index) => (
              <div
                key={service.name + index}
                className={`flex flex-col ${
                  theme === "dark" ? "bg-nft-black-2" : "bg-nft-gray-2"
                } items-center justify-center rounded-lg`}
              >
                <Image
                  src={`${urlFor(service.imgurl)}`}
                  alt="services"
                  objectFit="cover"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="object-center object-cover"
                />
                <div
                  className={`flex flex-col items-center justify-center p-6  text-white hover:text-nft-red-violet  transition duration-300 ease-in`}
                >
                  <h1 className="text-2xl font-semibold mb-3">
                    {service.name}
                  </h1>
                  {/* <div className="w-[70%]"> */}
                    <p className="leading-relaxed mb-3">
                      {service.description}
                    </p>
                  {/* </div> */}
                </div>
                <motion.button
                  className="box bottom-5 xs:m-2 sm:pt-2 sm:mb-5 rounded-full md:bottom-3 lg:bottom-3 nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  handleClick={() => router.push('http://platinumbladesformen.booksy.com/')}
                >
                Schedule an appointment
                
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

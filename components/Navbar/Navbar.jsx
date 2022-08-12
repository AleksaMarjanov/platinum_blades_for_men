import React, {useState, useEffect} from 'react'
import  Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Button from '../Button/Button'
import { useTheme } from 'next-themes';
import images from '../../assets'

const MenuItems =({ isMobile, active, setActive, setIsOpen }) => {
    const generateLink = (i) => {
        switch(i) {
            case 0: return '/';
            case 1: return '#testimonials';
            case 2: return '#about';
            case 3: return '#services';
            case 4: return '#gallery';
            case 5: return '#contact';
            default: return '/';
        }
    };

    return(
        <ul className={`list-none flexCenter flex-row ${isMobile ? 'flex-col h-full' : ''}`}>
        {['Home', 'Testimonials','About', 'Services', 'Gallery', 'Contact'].map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setActive(item);
  
              if (isMobile) setIsOpen(false);
            }}
            className={`flex flex-row items-center font-poppins font-semibold textBase dark:hover:text-white hover:text-nft-dark mx-3
              ${active === item
              ? 'dark:text-white text-nft-black-1'
              : 'dark:text-nft-gray-3 text-nft-gray-2'
              }
            `}
          >
            <Link href={generateLink(i)}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    )
}

const ButtonGroup = ({ setActive, router, setIsOpen }) => {
    return (
      <Button
        btnName="Book An Appointment"
        classStyles="mx-2 rounded-xl"
        handleClick={() => {
          setActive('');
          router.push('http://platinumbladesformen.booksy.com/');
        }}
      />
    ) 
  };



  const checkActive = (active, setActive, router) => {
    switch (router.pathname) {
      case '/':
        if (active !== 'Home') setActive('Home');
        break;
      case '/testimonials':
        if (active !== 'Testimonials') setActive('Testimonials');
        break;
      case '/about':
        if (active !== 'About') setActive('About');
        break;
      case '/services':
        if (active !== 'Services') setActive('Services');
        break;
      case '/gallery':
        if (active !== 'Gallery') setActive('Gallery');
        break;
      case '/contact':
        if (active !== 'Contact') setActive('Contact');
        break;
      default:
        setActive('');
    }
  };


const Navbar = () => {
const {theme, setTheme} = useTheme()
const [isOpen, setIsOpen] = useState(false)
const [active, setActive] = useState('')
const router = useRouter();

useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  useEffect(() => {
    checkActive(active, setActive, router);
  }, [router.pathname, active, router]);



  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white  dark:border-nft-black-1 border-nft-gray-1">
    <div className="flex flex-1 flex-row justify-start">
      <Link href="/">
        <div
          className="flexCenter md:hidden cursor-pointer"
          onClick={() => {
            setActive('Home');
          }}
        >
          <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">Platinum Blades</p>
        </div>
      </Link>
      <Link href="/">
        <div
          className="hidden md:flex"
          onClick={() => {
            setActive('Home');
            setIsOpen(false);
          }}
        >
          <Image src={images.logo} objectFit="contain" width={32} height={32} alt="logo" className='rounded-full'/>
          <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">Platinum Blades</p>
        </div>
      </Link>
    </div>

    <div className="flex flex-initial flex-row justify-end">
      <div className="flex items-center mr-2">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
          <i className="fas fa-sun" />
          <i className="fas fa-moon" />
          <div className="w-3 h-3 absolute bg-white rounded-full ball" />
        </label>
      </div>
      <div className="md:hidden flex">
        <ul className="list-none flexCenter flex-row">
          <MenuItems active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </ul>
      </div>
    </div>

    <div className="hidden md:flex ml-2">
      {isOpen
        ? (
          <Image
          src={images.cross}
            objectFit="contain"
            width={20}
            height={20}
            alt="close"
            onClick={() => setIsOpen(false)}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        ) : (
          <Image
          src={images.menu}
            objectFit="contain"
            width={25}
            height={25}
            alt="menu"
            onClick={() => setIsOpen(true)}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        )}
      {isOpen && (
        <div className="fixed inset-0 top-65 dark:bg-nft-black-2 bg-white z-10 nav-h flex justify-between flex-col">
          <div className="flex-1 p-4">
            <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
          </div>
          <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
            <ButtonGroup setActive={setActive} router={router} setIsOpen={setIsOpen} />
          </div>

        </div>
      )}
    </div>

  </nav>
    )
}

export default Navbar
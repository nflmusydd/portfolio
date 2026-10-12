import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-scroll"
import { logo } from "../../assets/index.jsx"
import { navLinksdata } from '../../constans/index.jsx'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lang, setLang] = useState('ID');
  const [showMenuMobile, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // klik diluar elemen ref 'dropdownRef'
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-16 px-6 mx-auto flex justify-between items-center bg-bodyColor sticky top-0 z-50 border-b border-b-blue-500">
        <div 
          className="h-full py-2 flex items-center justify-start gap-3 cursor-pointer md:cursor-default"
          onClick={() => {
            if (window.innerWidth < 768) {
              setShowMenu(true);
            }
          }}
        >
            <img 
              src={logo} 
              alt="logo" 
              className="h-10 w-auto object-contain" 
            />
        </div>

        <ul className="items-center gap-8 font-titleFont text-lightText hidden md:flex">
            {navLinksdata.map(({_id, title, link}) => (
                <li 
                    key={_id} 
                    className="text-base font-normal tracking-wide hover:text-designColor cursor-pointer transition-colors duration-300"
                >
                    <Link
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >
                        {title}
                    </Link>
                </li>
            ))}
        </ul>

        <div className="relative flex items-center" ref={dropdownRef}>
            <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-lightText hover:text-designColor transition-colors duration-300 outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.954 11.954 0 0 1 12 13.5c-2.998 0-5.74 1.1-7.843 2.918m15.686 0A8.959 8.959 0 0 1 12 21" />
                </svg>

                <span className="font-medium text-sm tracking-wide">{lang}</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <div 
                className={`absolute top-10 right-0 w-28 bg-gray-900 border border-gray-700 rounded-md shadow-xl py-2 flex flex-col z-50 origin-top-right transition-all duration-300 ease-in-out ${
                    dropdownOpen 
                    ? 'opacity-100 scale-100 visible' 
                    : 'opacity-0 scale-95 invisible pointer-events-none'
                }`}
            >
                <button 
                    onClick={() => { setLang('ID'); setDropdownOpen(false); }}
                    className={`px-4 py-2 text-sm text-left hover:bg-gray-800 hover:text-designColor transition-colors ${lang === 'ID' ? 'text-designColor font-semibold' : 'text-lightText'}`}
                >
                    Indonesia
                </button>
                <button 
                    onClick={() => { setLang('EN'); setDropdownOpen(false); }}
                    className={`px-4 py-2 text-sm text-left hover:bg-gray-800 hover:text-designColor transition-colors ${lang === 'EN' ? 'text-designColor font-semibold' : 'text-lightText'}`}
                >
                    English
                </button>
            </div>
        </div>

        {/* ===================== SIDEBAR MOBILE ===================== */}
        
        <div 
          className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 md:hidden ${showMenuMobile ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setShowMenu(false)}
        ></div>

        <div 
          className={`fixed top-0 left-0 w-[75%] h-screen bg-bodyColor border-r border-r-gray-800 z-50 p-6 flex flex-col gap-8 transition-transform duration-300 ease-in-out md:hidden shadow-shadowOne ${
            showMenuMobile ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div className="flex items-center gap-3">
                <img src={logo} alt="logo" className="h-8 w-auto object-contain" />
                <span className="pl-2 text-xl font-bold font-titleFont text-white tracking-wide">
                    Portfolio
                </span>
            </div>
            
            <button 
              onClick={() => setShowMenu(false)}
              className="text-gray-400 hover:text-designColor transition-colors duration-300 p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Daftar Navigasi Mobile */}
          <ul className="flex flex-col gap-6 font-titleFont text-lightText">
            {navLinksdata.map(({_id, title, link}) => (
              <li 
                key={_id} 
                className="text-base font-medium tracking-wide hover:text-designColor cursor-pointer transition-colors duration-300"
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  onClick={() => setShowMenu(false)} // tutup sidebar setelah link diklik
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
    </nav>
  )
}

export default Navbar

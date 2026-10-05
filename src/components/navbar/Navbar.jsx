import React from 'react'
import { Link } from "react-scroll"
import {logo} from "../../assets/index.jsx"
import { navLinksdata } from '../../constans/index.jsx'

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-6 mx-auto flex justify-between items-center bg-bodyColor sticky top-0 z-50 border-b border-b-green-600">
        <div className="h-full py-2 flex items-center gap-3 cursor-pointer">
            <img 
              src={logo} 
              alt="logo" 
              className="h-full w-auto object-contain cursor-pointer" 
            />
            <span className="font-titleFont pl-2 text-lightText text-xl font-bold hover:text-designColor transition-colors duration-300">
              Muhammad Naufal Musyaddad
            </span>
        </div>

        <ul className="flex items-center gap-8 font-titleFont text-lightText">
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
                        offset={-70}
                        duration={500}
                    >
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar

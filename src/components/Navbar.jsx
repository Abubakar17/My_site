import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/github.png";
import yahooIcon from "../assets/mail.png";
import linkedinIcon from "../assets/linkedin.png";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Syed Muhammad Abubakar &nbsp;
            <span className='sm:block hidden'> | ML Engineer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Add the CV link here */}
          <li
            className={`hover:text-white text-[18px] font-medium cursor-pointer text-secondary`}
          >
            <a href="https://drive.google.com/file/d/1LVfT0Qk5be2vHoke9FzjBQVWHJE88DGa/view?usp=sharing" download="CV_Syed_Muhammad_Abubakar.pdf">CV</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center gap-4">
          <a href="https://github.com/Abubakar17" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
          </a>
          <a href="mailto:syedabubakar03@yahoo.com" target="_blank" rel="noopener noreferrer">
            <img src={yahooIcon} alt="Yahoo" className="w-6 h-6 object-contain" />
          </a>
          <a href="https://www.linkedin.com/in/s-m-abubakar/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain" />
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* Add the CV link here for mobile */}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
              >
                <a href="https://drive.google.com/file/d/1LVfT0Qk5be2vHoke9FzjBQVWHJE88DGa/view?usp=sharing" download="CV_Syed_Muhammad_Abubakar.pdf">CV</a>
              </li>
            </ul>
            {/* Social Icons for Mobile */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com/Abubakar17" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://www.yahoo.com/syedabubakar03@yahoo.com" target="_blank" rel="noopener noreferrer">
                <img src={yahooIcon} alt="Yahoo" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://www.linkedin.com/in/s-m-abubakar/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

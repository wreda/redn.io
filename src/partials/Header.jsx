import React, { useState, useRef, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {

  const [top, setTop] = useState(true);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="#home" className="block" aria-label="Cruip">
  <h1 className="text-2xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-4"> 
	    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-500">RedN</span>
	  </h1>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="hidden md:flex md:flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="#about" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              <li>
                <Link to="#features" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Features</Link>
              </li>
              <li>
                <Link to="#publications" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Publications</Link>
              </li>
              <li>
                <Link to="#contact" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
            </ul>

          </nav>

	  {/* Mobile menu */}
          <div className="md:hidden ">
            {/* Hamburger button */}
            <button
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-500 hover:text-gray-500 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-white px-4 py-2">
                <li>
                  <Link
                    to="#about"
                    className="flex text-gray-600 hover:text-gray-300 py-2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#features"
                    className="flex text-gray-600 hover:text-gray-300 py-2"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="#publications"
                    className="flex text-gray-600 hover:text-gray-300 py-2"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    to="#contact"
                    className="flex text-gray-600 hover:text-gray-300 py-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;

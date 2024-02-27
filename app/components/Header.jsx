"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isUserLoggedIn = true;



  //toggle bar
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <>
      <div className='bg-gray-800 text-white text-center py-2'>
        <div className='flex items-center justify-between h-16'>

          <span className="flex-shrink-0 ml-4">
            <Link href="/logo">
              <Image
                src="/vercel.svg"
                width={40}
                height={40}
                alt="logo"
                className="inline-block mr-2 dark:text-gray-500"
              />

            </Link>
          </span>


          <div className='hidden md:block mr-4'>
            <div className='ml-4 flex items-center space-x-4'>


              {isUserLoggedIn ?
                (
                  <>

                    <Link href='/' className='hover:dark border-solid border-2 border-teal-600 dark:text-white hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium'>
                      Home
                    </Link>
                    <Link href='/contact' className='dark:text-white border-solid border-2 border-teal-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Contact
                    </Link>
                    
                    <Link href='/about' className='dark:text-white border-solid border-2 border-teal-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      About
                    </Link>


                  </>
                ) :
                (
                  <>

                    <Link href='/sign-in' className='dark:text-gray-800 border-solid border-2 border-teal-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Sign In
                    </Link>
                  </>
                )
              }

            </div>
          </div>

          {/* Mobile section goes here */}
          <div className='md:hidden flex items-center mr-4'>

            {isUserLoggedIn ? (
              <>

               
                {navbarOpen && (
                  <div className='relative right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end'>
                    <Link
                      href='/profile'
                      className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                      onClick={toggleNavbar}
                    >
                      My profile
                    </Link>
                    <button type='button'
                    >
                      Sign Out
                    </button>
                  </div>)}

              </>
            ) : (
              <>

                <Link
                  href='/sign-in'
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                  onClick={toggleNavbar}
                >
                  Sign In
                </Link>
              </>
            )}
            <button
              className='
          inline-flex items-center justify-center p-2 rounded-md dark:text-white 
          dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white
        '
              onClick={toggleNavbar}
            >
              {navbarOpen ? (
                <svg className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from 'react';
import { useState } from 'react';

import { Logo } from '@/components/molecules/Logo';

export const Navbar = ({ user }) => {
  const [open, setOpen] = useState(false);
  //
  const toggle = () => {
    setOpen(!open);
  };
  //
  return (
    <nav className="navbar relative">
      <Logo>BuzzStack</Logo>
      <ul>
        <li onClick={toggle}>
          👋🏽 Welcome {user}
          {!open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </li>
        {open ? (
          <li aria-label="dropdown" className=" ">
            <p className="py-[.4rem] px-[1.6rem] rounded-[.4rem] hover:bg-blue-100 cursor-pointer flex items-center gap-x-[.8rem] font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="bg-blue-500"
                className="w-[1.6rem] h-[1.6rem]"
              >
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
              <span>Profile</span>
            </p>
            <p className="py-[.4rem] px-[1.6rem] rounded-[.4rem] hover:bg-blue-100 cursor-pointer flex items-center gap-x-[.8rem] font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="bg-blue-500"
                className="w-[1.6rem] h-[1.6rem]"
              >
                <path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" />
                <path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>My Feed</span>
            </p>
            <p className="py-[.4rem] px-[1.6rem] rounded-[.4rem] hover:bg-blue-100 cursor-pointer flex items-center gap-x-[.8rem] font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="bg-blue-500"
                className="w-[1.6rem] h-[1.6rem]"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Logout</span>
            </p>
          </li>
        ) : (
          ''
        )}
      </ul>
    </nav>
  );
};

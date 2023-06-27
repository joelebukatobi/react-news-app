import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { Logo } from '@/components/molecules/Logo';
import { Button } from '@/components/atoms/Button';
import { logoutUser } from '@/services/api';
import { removeTokenCookie } from '@/helpers/cookieHelper';
import { logoutUser as logout, setError, setLoading } from '@/features/userSlice';

export const Navbar = ({ user }) => {
  const [open, setOpen] = useState(false);
  //
  const toggle = () => {
    setOpen(!open);
  };
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //

  const handleLogout = async (e) => {
    e.preventDefault(e);
    try {
      //
      dispatch(setLoading(true));
      const response = await logoutUser();
      //
      if (response.status === 'ok') {
        dispatch(logout());
        dispatch(setLoading(false));
        removeTokenCookie();
        navigate('/');
      }
      //
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

  //
  return (
    <nav className="navbar relative">
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li onClick={toggle}>
          {user ? (
            `
          👋🏽 Welcome ${user.first_name}`
          ) : (
            <Link to="/login">Login</Link>
          )}

          {user ? (
            !open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )
          ) : (
            ''
          )}
        </li>
        {!user ? (
          <li aria-label="register">
            <Link to="/register">Register</Link>
          </li>
        ) : (
          ''
        )}
        {open && user ? (
          <form aria-label="dropdown" onSubmit={handleLogout}>
            <Link to="/profile">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
              <span>Profile</span>
            </Link>
            <Button
              type={'submit'}
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
              }
            >
              Logout
            </Button>
          </form>
        ) : (
          ''
        )}
      </ul>
    </nav>
  );
};

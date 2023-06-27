import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUser, logoutUser } from '@/services/api';
import { getTokenFromCookie } from '@/helpers/cookieHelper';

import { setUser, setError, setLoading } from '@/features/userSlice';
import { Navbar } from '@/components/organisms/Navbar';

import { Loading } from '@/components/organisms/Loading';

export const Layout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchUserData = async () => {
    try {
      dispatch(setLoading(true));
      // Get the token from the cookie
      const token = getTokenFromCookie();
      if (!token) {
        // Handle token not found error
        dispatch(logoutUser());
        dispatch(setLoading(false));
        navigate('/login');
        return;
      }
      // Make API request to fetch user data by ID
      const response = await fetchUser(token);
      // Update Redux store with user data
      dispatch(setUser(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="layout">
          <Navbar user={user} />
          {children}
        </div>
      )}
    </>
  );
};

import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/atoms/Button';
import { InputGroup } from '@/components/molecules/InputGroup';
import { Logo } from '@/components/molecules/Logo';
import { Loading } from '@/components/organisms/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError } from '@/features/userSlice';
import { loginUser } from '@/services/api';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      dispatch(setLoading(true));
      const response = await loginUser(data);
      if (response.status === 'ok') {
        navigate('/');
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div aria-label="form">
          {/* <ToastContainer /> */}
          <main>
            <header>
              <Link to="/">
                <Logo />
              </Link>
              <hr />
              <p>
                Welcome Back! To access your personalized news feed, please log in with your email address and password
                below.
              </p>
            </header>
            <form onSubmit={handleSubmit}>
              <InputGroup
                type={'email'}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label="Email"
                placeholder="Enter email"
              />

              <InputGroup
                onChange={(e) => setPassword(e.target.value)}
                type={'password'}
                value={password}
                label="Password"
                placeholder="Enter password"
              />

              <div aria-label="form-footer">
                <p>
                  No Account?
                  <a className="underline" href="">
                    Sign Up
                  </a>
                </p>

                <Button>Login</Button>
              </div>
            </form>
          </main>
        </div>
      )}
    </>
  );
};

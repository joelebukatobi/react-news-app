import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/atoms/Button';
import { InputGroup } from '@/components/molecules/InputGroup';
import { FormRow } from '@/components/molecules/FormRow';
import { Logo } from '@/components/molecules/Logo';
import { Loading } from '@/components/organisms/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setError } from '@/features/userSlice';
import { registerUser } from '@/services/api';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [sources, setSources] = useState('');
  const [categories, setCategories] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password, first_name, last_name, sources, categories, password_confirmation };
    try {
      dispatch(setLoading(true));
      const response = await registerUser(data);
      if (response.status === 'ok') {
        navigate('/');
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
          <main>
            <header>
              <Link to="/">
                <Logo />
              </Link>
              <hr />
              <p>
                Need to personalize your feed? Please fill the form <br />
                below to register an account{' '}
              </p>
            </header>
            <form onSubmit={handleSubmit}>
              <FormRow>
                <InputGroup
                  type={'text'}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={first_name}
                  label="First Name"
                  placeholder="Enter First Name"
                />
                <InputGroup
                  type={'text'}
                  onChange={(e) => setLastName(e.target.value)}
                  value={last_name}
                  label="Last Name"
                  placeholder="Enter Last Name"
                />
              </FormRow>
              <InputGroup
                type={'text'}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label="Email"
                placeholder="Enter Email"
              />

              <FormRow>
                <InputGroup
                  onChange={(e) => setPassword(e.target.value)}
                  type={'password'}
                  value={password}
                  label="Password"
                  placeholder="Enter Password"
                />
                <InputGroup
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={'password'}
                  value={password_confirmation}
                  label="Confirm Password"
                  placeholder="Confirm Password"
                />
              </FormRow>
              <FormRow>
                <InputGroup
                  type={'text'}
                  onChange={(e) => setSources(e.target.value)}
                  value={sources}
                  label="Sources"
                  placeholder="Enter Sources"
                />
                <InputGroup
                  type={'text'}
                  onChange={(e) => setCategories(e.target.value)}
                  value={categories}
                  label="Categories"
                  placeholder="Enter Categories"
                />
              </FormRow>

              <div aria-label="form-footer">
                <p>
                  Have An Account?
                  <Link to="/login" className="underline" href="">
                    Login
                  </Link>
                </p>

                <Button>Register</Button>
              </div>
            </form>
            {/* {error && <p>{error}</p>} */}
          </main>
        </div>
      )}
    </>
  );
};

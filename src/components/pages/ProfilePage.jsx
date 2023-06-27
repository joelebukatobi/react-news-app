import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@/components/atoms/Button';
import { InputGroup } from '@/components/molecules/InputGroup';
import { FormRow } from '@/components/molecules/FormRow';
import { Layout } from '@/components/organisms/Layout';

import { setLoading, setError } from '@/features/userSlice';
import { updateUser } from '@/services/api';
import { getTokenFromCookie } from '@/helpers/cookieHelper';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const { user } = useSelector((state) => state.user);

  const queryCategories = user.categories.map((category) => `${category}`);
  const categoriesUpdate = queryCategories.join(',');

  const querySources = user.sources.map((source) => `${source}`);
  const sourcesUpdate = querySources.join(',');

  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [sources, setSources] = useState(sourcesUpdate);
  const [categories, setCategories] = useState(categoriesUpdate);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [password_confirmation, setConfirmPassword] = useState(user.password_confirmation);
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password, first_name, last_name, sources, categories, password_confirmation };
    try {
      dispatch(setLoading(true));
      // Get the token from the cookie
      const token = getTokenFromCookie();
      if (!token) {
        // Handle token not found error
        dispatch(setLoading(false));
        navigate('/login');
        return;
      }
      const response = await updateUser(token, data);
      if (response.status === 'ok') {
        dispatch(setLoading(false));
        navigate('/profile');
      }
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
  return (
    <Layout>
      <div aria-label="profile">
        <main>
          <header>
            <p>Enhance your profile with personalized updates </p>
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
                value={sourcesUpdate}
                label="Sources"
                placeholder="Enter Sources"
              />
              <InputGroup
                type={'text'}
                onChange={(e) => setCategories(e.target.value)}
                value={categoriesUpdate}
                label="Categories"
                placeholder="Enter Categories"
              />
            </FormRow>

            <div aria-label="form-footer">
              <Button>Update</Button>
            </div>
          </form>
          {/* {error && <p>{error}</p>} */}
        </main>
      </div>
      <div aria-label="profile"></div>
    </Layout>
  );
};

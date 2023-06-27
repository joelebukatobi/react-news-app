import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NewsFeed } from '@/components/pages/NewsFeed';
import { LoginPage } from '@/components/pages/LoginPage';
import { RegisterPage } from '@/components/pages/RegisterPage';
import { ProfilePage } from '@/components/pages/ProfilePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/" exact element={<NewsFeed />} />
      </Routes>
    </>
  );
};

export default App;

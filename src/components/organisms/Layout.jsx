import React from 'react';

import { NewsFeed } from '@/components/organisms/NewsFeed';
import { Navbar } from '@/components/organisms/Navbar';
export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar user={'Joel Onwuanaku'} />
      <NewsFeed>{children}</NewsFeed>
    </div>
  );
};

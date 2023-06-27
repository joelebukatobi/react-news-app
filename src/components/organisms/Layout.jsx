import React from 'react';
import { Navbar } from '@/components/organisms/Navbar';
export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar user={'Joel Onwuanaku'} />
      {children}
    </div>
  );
};

import React from 'react';
import { Navbar } from '@/components/organisms/Navbar';
export const Layout = ({ children, user }) => {
  return (
    <div className="layout">
      <Navbar user={user} />
      {children}
    </div>
  );
};

import React from 'react';

import { NavLogo } from '@/components/atoms/NavLogo';
import { NavItem } from '@/components/atoms/NavItem';
import { NavList } from '@/components/molecules/NavList';

export const Navbar = () => {
  return (
    <nav className="container navbar">
      <NavLogo>Logo</NavLogo>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>News</NavItem>
        <NavItem>Feed</NavItem>
        <NavItem>Settings</NavItem>
      </NavList>
    </nav>
  );
};

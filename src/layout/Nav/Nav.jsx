import React from 'react';
import { navRoutes } from '../../routes/nav.routes';

const Nav = () => {
  return (
    <ul className="flex flex-col items-center w-full">
      {navRoutes.map((nav) => (
        <li className="w-full flex flex-col items-center mb-4 h-10 justify-center text-gray-800 opacity-50 hover:opacity-100">
          {nav.icon}
        </li>
      ))}
    </ul>
  );
};

export default Nav;

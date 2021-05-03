import {
  faHome,
  faListAlt,
  faMusic,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const navRoutes = [
  {
    slug: '/dashboard',
    icon: <FontAwesomeIcon icon={faHome} className="text-gray-700" />,
  },
  {
    slug: '/artists',
    icon: <FontAwesomeIcon icon={faUser} className="text-gray-700" />,
  },
  {
    slug: '/songs',
    icon: <FontAwesomeIcon icon={faMusic} className="text-gray-700" />,
  },
  {
    slug: '/playlists',
    icon: <FontAwesomeIcon icon={faListAlt} className="text-gray-700" />,
  },
];

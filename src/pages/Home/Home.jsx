import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LoginForm from '../../forms/LoginForm';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-screen-sm w-full">
        <div className="p-16 bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} size="2x" className="text-gray-500" />
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Home;

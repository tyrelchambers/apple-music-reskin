import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { MainButton } from '../components/Button/Button';
import Input from '../components/Input/Input';
import InputWrapper from '../components/InputWrapper/InputWrapper';

const LoginForm = () => {
  const history = useHistory();

  const submitHandler = () => {
    history.push('/dashboard');
  };

  return (
    <form className="w-full">
      <div className="w-full h-10">
        <div
          id="appleid-signin"
          data-color="black"
          data-border="true"
          data-type="sign in"
        ></div>
      </div>
    </form>
  );
};

export default LoginForm;

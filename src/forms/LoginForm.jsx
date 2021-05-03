import React from 'react';
import { MainButton } from '../components/Button/Button';
import Input from '../components/Input/Input';
import InputWrapper from '../components/InputWrapper/InputWrapper';

const LoginForm = () => {
  return (
    <form className="w-full">
      <InputWrapper for="email" label="Apple ID">
        <Input placeholder="Apple ID" type="text" name="email" />
      </InputWrapper>

      <InputWrapper for="email" label="Apple Password">
        <Input placeholder="password" type="password" name="password" />
      </InputWrapper>

      <MainButton>Login</MainButton>
    </form>
  );
};

export default LoginForm;

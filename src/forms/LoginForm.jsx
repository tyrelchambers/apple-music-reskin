import React from 'react';
import { useHistory } from 'react-router';
import { MainButton } from '../components/Button/Button';
import Input from '../components/Input/Input';
import InputWrapper from '../components/InputWrapper/InputWrapper';

const LoginForm = () => {
  const history = useHistory();

  const submitHandler = () => {
    history.push('/dashboard');
    console.log('heyey');
  };

  return (
    <form className="w-full">
      <InputWrapper for="email" label="Apple ID">
        <Input placeholder="Apple ID" type="text" name="email" />
      </InputWrapper>

      <InputWrapper for="email" label="Apple Password">
        <Input placeholder="password" type="password" name="password" />
      </InputWrapper>

      <MainButton onClick={submitHandler}>Login</MainButton>
    </form>
  );
};

export default LoginForm;

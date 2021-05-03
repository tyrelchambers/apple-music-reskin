import React from 'react';

const Input = ({ type, placeholder, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      className="bg-gray-100 w-full rounded-md p-3"
    />
  );
};

export default Input;

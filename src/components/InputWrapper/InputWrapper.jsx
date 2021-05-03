import React from 'react';
import './InputWrapper.css';

const InputWrapper = (props) => {
  return (
    <div className="mb-4 mt-4 flex flex-col">
      <label htmlFor={props.for} className="form-label text-gray-600 font-bold">
        {props.label}
      </label>
      {props.children}
    </div>
  );
};

export default InputWrapper;

import React from 'react';

const MainButton = (props) => {
  return (
    <button
      type="button"
      className="p-4 center w-full blue-gradient rounded-md text-white font-bold uppercase text-xs"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export { MainButton };

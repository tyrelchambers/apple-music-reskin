import React from 'react';

export const H1 = (props) => (
  <h1 className={`text-2xl font-bold ${props.className}`}>{props.children}</h1>
);
export const H2 = (props) => (
  <h2 className={`text-lg font-bold ${props.className}`}>{props.children}</h2>
);

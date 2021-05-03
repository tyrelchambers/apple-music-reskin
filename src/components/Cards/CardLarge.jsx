import React from 'react';

const CardLarge = ({ data }) => {
  return (
    <div className="rounded-lg card-large">
      <img src={data.image} className="w-full" />
      <div className="artist">
        <p className="text-2xl">{data.artist}</p>
      </div>
    </div>
  );
};

export default CardLarge;

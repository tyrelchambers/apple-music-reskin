import React from 'react';

const CardSmall = ({ data, type, stacked }) => {
  let meta;

  if (type === 'playlist') {
    meta = (
      <div className="flex flex-col">
        <p className="font-bold">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.songs} songs</p>
      </div>
    );
  }

  if (type === 'song') {
    meta = (
      <div className="flex flex-col">
        <p className="font-bold">{data.song}</p>
        <p className="text-blue-500 text-sm mt-1 mb-1">{data.artist}</p>
        <p className="text-gray-500 text-xs italic">{data.album}</p>
      </div>
    );
  }

  return (
    <div className={`card-small ${stacked ? 'stacked' : 'not-stacked'}`}>
      <img src={data.image} className="card-thumb shadow-md" />
      {meta}
    </div>
  );
};

export default CardSmall;

import React from 'react';
import CardLarge from '../../components/Cards/CardLarge';
import { H2 } from '../../components/Headings/Headings';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    artist: 'Morgan Walen',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    artist: 'Morgan Walen',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    artist: 'Morgan Walen',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    artist: 'Morgan Walen',
  },
];

const TopArtists = () => {
  return (
    <>
      <H2>Most played artists</H2>
      <div className="flex mt-4">
        {data.map((artist) => (
          <CardLarge data={artist} />
        ))}
      </div>
    </>
  );
};

export default TopArtists;

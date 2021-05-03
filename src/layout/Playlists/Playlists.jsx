import React from 'react';
import CardSmall from '../../components/Cards/CardSmall';
import { H2 } from '../../components/Headings/Headings';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    name: 'My funky playlist',
    songs: 20,
  },
  {
    image:
      'https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    name: 'My funky playlist',
    songs: 20,
  },
  {
    image:
      'https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    name: 'My funky playlist',
    songs: 20,
  },
  {
    image:
      'https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    name: 'My funky playlist',
    songs: 20,
  },
  {
    image:
      'https://images.unsplash.com/photo-1459369510627-9efbee1e6051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    name: 'My funky playlist',
    songs: 20,
  },
];
const Playlists = () => {
  return (
    <div>
      <H2>Playlists</H2>

      <div className="mt-4">
        {data.map((playlist) => (
          <CardSmall data={playlist} type="playlist" stacked />
        ))}
      </div>
    </div>
  );
};

export default Playlists;

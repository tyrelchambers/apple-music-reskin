import React from 'react';
import CardSmall from '../../components/Cards/CardSmall';
import { H2 } from '../../components/Headings/Headings';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510759395231-72b17d622279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    song: 'Just another song',
    artist: 'Morgan Walen',
    album: 'My Album',
  },
];

const TopSongs = () => {
  return (
    <div className="mt-12 w-full">
      <H2>Top Songs</H2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {data.map((song) => (
          <div className="grid">
            <CardSmall data={song} type="song" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSongs;

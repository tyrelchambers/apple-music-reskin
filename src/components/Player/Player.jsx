import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PlayerControls from '../PlayerControls/PlayerControls';
import PlayerProgress from '../PlayerProgress/PlayerProgress';
import PlayerVolume from '../PlayerVolume/PlayerVolume';

const data = {
  artist: 'Morgan Walen',
  song: 'Honkey Tonky ',
  image:
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
};

const Player = () => {
  return (
    <div className="player-wrapper bg-gray-800 rounded-lg shadow-lg grid grid-cols-12">
      <div className="meta flex col-span-2">
        <img src={data.image} alt="" className="player-album-image" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-white text-xl">{data.song}</p>
          <p className="text-gray-400">{data.artist}</p>
        </div>
      </div>

      <PlayerControls />
      <PlayerProgress />
      <PlayerVolume />
      <span className="p-4 flex items-center">
        <FontAwesomeIcon icon={faQuoteRight} className="text-gray-300" />
      </span>
    </div>
  );
};

export default Player;

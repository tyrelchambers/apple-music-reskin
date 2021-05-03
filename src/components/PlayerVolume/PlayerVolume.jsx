import { faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PlayerVolume = () => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faVolumeOff} className="text-gray-300 mr-6" />
      <div className="volume-wrapper">
        <div className="volume"></div>
      </div>
    </div>
  );
};

export default PlayerVolume;

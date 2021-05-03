import React from 'react';

const PlayerProgress = () => {
  return (
    <div className="flex items-center player-progress-wrapper mr-20">
      <p className="text-gray-400 mr-4">0:00</p>
      <div className="player-progress-bar-wrapper">
        <div className="player-progress-bar"></div>
      </div>
      <p className="text-gray-400 ml-4">3:47</p>
    </div>
  );
};

export default PlayerProgress;

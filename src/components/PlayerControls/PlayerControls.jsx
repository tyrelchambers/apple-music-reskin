import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const PlayerControls = () => {
  const [state, setState] = useState('paused');
  const play =
    state !== 'paused' ? (
      <FontAwesomeIcon
        icon={faPlay}
        onClick={() => setState('paused')}
        className="player-controls-btn"
      />
    ) : (
      <FontAwesomeIcon
        icon={faPause}
        onClick={() => setState('play')}
        className="player-controls-btn"
      />
    );

  return (
    <div className="flex items-center col-span-2 justify-center">
      <div className="player-controls-btn-wrapper sec">
        <FontAwesomeIcon
          icon={faStepBackward}
          className="player-controls-btn"
        />
      </div>
      <div className="player-controls-btn-wrapper main">{play}</div>
      <div className="player-controls-btn-wrapper sec">
        <FontAwesomeIcon
          icon={faStepForward}
          className="player-controls-btn "
        />
      </div>
    </div>
  );
};

export default PlayerControls;

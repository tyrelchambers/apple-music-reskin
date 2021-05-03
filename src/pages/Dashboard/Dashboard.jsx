import { faList, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Player from '../../components/Player/Player';
import Search from '../../components/Search/Search';
import Nav from '../../layout/Nav/Nav';
import Playlists from '../../layout/Playlists/Playlists';
import TopArtists from '../../layout/TopArtists/TopArtists';
import TopSongs from '../../layout/TopSongs/TopSongs';

const Dashboard = () => {
  return (
    <div className="flex">
      <header className="w-20 h-screen flex flex-col items-center p-4">
        <Nav />
      </header>

      <div className="flex flex-col w-full pt-4 pr-4 ">
        <div className="flex items-center">
          <Search />
          <span className="p-4">
            <FontAwesomeIcon
              icon={faQuoteRight}
              className="text-gray-800 opacity-50 hover:opacity-100"
            />
          </span>

          <span className="p-4">
            <FontAwesomeIcon
              icon={faList}
              className="text-gray-800 opacity-50 hover:opacity-100"
            />
          </span>
        </div>

        <main className="mt-10 flex w-full">
          <div className="flex flex-col w-4/5">
            <TopArtists />

            <TopSongs />
          </div>
          <div className="flex flex-col">
            <Playlists />
          </div>
        </main>
        <Player />
      </div>
    </div>
  );
};

export default Dashboard;

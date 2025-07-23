import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Analytics from '../components/Analytics/Analytics';
import Data from '../Data/DAta';

export default function Content() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <div
        className={`flex flex-col flex-1 px-2 py-1 min-h-screen ${
        darkTheme ? 'bg-[#111] text-white' : 'bg-[#e4e4e4] text-black'
      } transition-colors duration-300`}
    >
     <Header/>
     <Data/>
    </div>
  );
}

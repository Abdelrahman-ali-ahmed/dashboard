import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { useSelector } from 'react-redux';


const App: React.FC = () => {
   const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className='m-0 p-0 border-box-sizing font-sans'> 
    <div className={`App relative flex justify-start min-h-dvh items-start ${darkTheme?"bg-black":"bg-white"} `}>
      
      <NavBar/>
      <div className="flex-1 p-4 md:p-6 md:ml-0">
        <h1 className={`text-xl md:text-2xl mt-16 md:mt-0 ${darkTheme ? "text-white" : "text-black"}`}>Admin DashBoard</h1>
      </div>
      </div>
    </div>
  );
};

export default App;



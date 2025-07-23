import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { useSelector } from 'react-redux';
import Content from './Content/Content';
import Login from './Login/Login';


const App: React.FC = () => {
   const darkTheme = useSelector((state) => state.theme.darkTheme);
   const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <div className='m-0 p-0 border-box-sizing font-sans'> 
    <div className={`App relative flex justify-start min-h-dvh items-start ${darkTheme?"bg-black":"bg-white"} `}>
    {isLoggedIn ? (
        <>
          <NavBar />
          <Content />
        </>
      ) : (
     <div className={`min-h-screen w-full flex items-center justify-center ${darkTheme ? 'bg-black' : 'bg-white'} font-sans`}>
      <Login />
    </div>
      )}
   
 
 
      </div>
    </div>
  );
};

export default App;



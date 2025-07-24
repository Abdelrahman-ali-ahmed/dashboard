import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { useSelector } from 'react-redux';
import Content from './Content/Content';
import Login from './Login/Login';


const App: React.FC = () => {
   const darkTheme = useSelector((state) => state.theme.darkTheme);
   const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
   console.log(darkTheme);
   
return (
  <div className={`min-h-screen w-full ${darkTheme ? 'bg-black' : 'bg-white'} flex justify-end items-end`}>
    {isLoggedIn ? (
      <>
        <NavBar />
        <Content />
      </>
    ) : (
      <div className="flex items-center justify-center min-h-screen w-full">
        <Login />
      </div>
    )}
  </div>
);




};

export default App;





import React, { createContext, useEffect, useState } from 'react';
import Navbar from './Components/Fixed/Navbar/Navbar';
import Main from './Components/Fixed/Main/Main';
import FloatingActionButton from './Components/Fixed/FAB/FloatingActionButton';

// Create context
const ScreenContext = createContext();

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //console.log("ScreenWidth:", screenWidth); 

  return (
    <ScreenContext.Provider value={screenWidth}>
      <div>
        <Navbar />
        <Main />
        <FloatingActionButton />
      </div>
      
    </ScreenContext.Provider>
  );
};

export { App, ScreenContext };

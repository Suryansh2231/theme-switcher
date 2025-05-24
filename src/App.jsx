import React from 'react';
import { ThemeProvider, useTheme } from '../src/contexts/Theme.jsx';
import ThemeBtn from './components/Theme_Button.jsx';
import Card from './components/Card.jsx';
// import BoxComponent from './components/BoxComponent.jsx'

const App = () => {
  const { themeMode } = useTheme();

  const darKThemeObj = {
    backgroundColor: '#000',
    color: '#fff',
  }

  const lightThemeObj = {
    backgroundColor: '#fff',
    color: '#000',
  }

  return (
    <div style={themeMode === 'light' ? lightThemeObj : darKThemeObj}>
      <h1 className={`${themeMode === "light" ? "bg-green-900" : "bg-blue-700"} text-3xl p-4 text-white`}>
        Context Api Part Two
      </h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
            {/* <BoxComponent/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
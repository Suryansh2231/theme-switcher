import {useState,useEffect } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/Theme";


function App() {

  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light")
  }
  const darkTheme = () => {
    setthemeMode("dark")
  }

  useEffect(() => {
     const page = document.querySelector('html').classList;
     page.remove('light' , 'dark')
     page.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value ={{lightTheme , darkTheme , themeMode}}>
      <h1 className="bg-green-700 p-4 text-3xl"> context api part two</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

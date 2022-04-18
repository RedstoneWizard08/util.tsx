import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocalStorage } from "./components";

function App() {
  const ls = useLocalStorage();
  return (
    <div className="App">
      <header className="App-header">
        {ls.toString()}
      </header>
    </div>
  );
}

export default App;

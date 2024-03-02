import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/drugshops').then(resp => resp.json()).then(resp => setData(resp)).catch(err => console.log(err))
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {(!data) ? <p>Loading</p> : <p>{data[0]._id}</p>}
      </header>
    </div>
  );
}

export default App;

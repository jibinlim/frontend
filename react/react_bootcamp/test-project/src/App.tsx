import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Metterprot Page</h1>
        <div style={{width: "100%"}}>
          <iframe
          src="https://my.matterport.com/show/?m=ehBSk1bHZVS"
          width="100%"
          height="800px">
          </iframe>
        </div>
      </header>
    </div>
  );
}

export default App;

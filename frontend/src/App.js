import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forum from './forum.js'
import Boxinput from './boxinput.js'

class App extends React.Component{
  render(){
    return (
        <div className="App">
          <Forum />
          <Boxinput />
        </div>
      );
  }
  
}

export default App;

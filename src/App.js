import React, { Component } from 'react';
import './App.css';
import Test from './components/test';
import Welcome from './components/welcome';
class App extends Component
{
  render()
  {
    return(
      <div className='App'>
        <header className='test'></header>
        <Test></Test>
        <Welcome></Welcome>
      </div>
    )
      
    
  }
}

export default App;

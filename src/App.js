// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Results from './Results'

function App() {
  return (
    <div className="app">
      {/* header componet section */}
      <Header />
      {/* navigation componet section */}
      <Nav />
      {/* results componet section */}
      <Results />
    </div>
  );
}

export default App;

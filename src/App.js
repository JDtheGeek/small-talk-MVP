import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/layout/Navbar'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;

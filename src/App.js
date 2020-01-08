import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Article from './components/articles/Article'
import SignIn from './components/auth/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signin' component={SignIn} />
          <Route path='/article/:id' component={Article} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

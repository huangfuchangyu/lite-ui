import React from 'react'
import Root from './components/index'
import Home from './demos/Home'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path="/">
          <Root />
        </Route>

        <Route path="/about">
          <Home />
        </Route>

      </Switch>
    </Router>

  )
}

export default App;

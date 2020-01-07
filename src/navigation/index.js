import React from 'react'
import Home from '../demos/Home'
import DemoButtons from '../demos/Buttons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/buttons">
          <DemoButtons />
        </Route>

      </Switch>
    </Router>

  )
}

export default App

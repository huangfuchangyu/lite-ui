import React from 'react'
import Home from '../demos/Home'
import DemoButtons from '../demos/Buttons'
import BasePage from '../demos/BasePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/basePage" component={BasePage} />

        <Route exact path="/buttons" component={DemoButtons} />

      </Switch>
    </Router>

  )
}

export default App

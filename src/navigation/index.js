import React from 'react'

import Home from '../demos/Home'

import BasePage from '../demos/BasePage'
import OperationPage from '../demos/OperationPage'

import DemoButtons from '../demos/Buttons'
import DemoModals from '../demos/Modals'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/basePage" component={BasePage} />

        <Route exact path="/operationPage" component={OperationPage} />

        <Route exact path="/buttons" component={DemoButtons} />

        <Route exact path="/modals" component={DemoModals} />

      </Switch>
    </Router>

  )
}

export default App

import React from 'react'

import Home from '../demos/Home'

import BasePage from '../demos/BasePage'
import OperationPage from '../demos/OperationPage'

import DemoButtons from '../demos/Buttons'
import DemoModals from '../demos/Modals'
import DemoNotifications from '../demos/Notifications'

import { BrowserRouter as Router, Route, Switch, useLocation, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './index.scss'

export default function App() {
  return (

    <Router>
      <Switch>

        <Route exact path="/">
          <Redirect to="home" />
        </Route>

        <Route path="*">
          <AnimationApp />
        </Route>

      </Switch>
    </Router>

  )
}

function AnimationApp() {
  let location = useLocation();

  return (
    <TransitionGroup>

      <CSSTransition
        key={location.key}
        classNames="my-node"
        timeout={400}
      >
        
        <Switch location={location}>

          <Route path="/home" component={Home} />

          <Route path="/basePage" component={BasePage} />

          <Route exact path="/operationPage" component={OperationPage} />

          <Route exact path="/buttons" component={DemoButtons} />

          <Route exact path="/modals" component={DemoModals} />

          <Route exact path="/notifications" component={DemoNotifications} />

        </Switch>

      </CSSTransition>

    </TransitionGroup>
  );
}
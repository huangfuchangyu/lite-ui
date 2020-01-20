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

        <Route exact path="*">
          <AnimationApp />
        </Route>

      </Switch>
    </Router>

  )
}

function AnimationApp() {
  let location = useLocation()

  return (
    <TransitionGroup>

      <CSSTransition
        key={location.pathname}
        classNames={'my-node'}
        timeout={6000}
      >

        <Switch location={location}>

          <Route exact path="/home" component={Home} />

          <Route exact path="/basePage" component={BasePage} />

          <Route exact path="/operationPage" component={OperationPage} />

          <Route exact path="/buttons" component={DemoButtons} />

          <Route exact path="/modals" component={DemoModals} />

          <Route exact path="/notifications" component={DemoNotifications} />

        </Switch>

      </CSSTransition>

    </TransitionGroup>
  );
}
import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import './App.css'

import Users from './containers/User/Users/Users'
import NewPlace from './containers/Place/NewPlace/NewPlace'
import MainNavigation from './components/shared/Navigation/MainNavigation/MainNavigation'

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/places/new' exact>
            <NewPlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App

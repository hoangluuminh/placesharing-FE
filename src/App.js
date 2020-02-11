import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import './App.css'

import Users from './containers/User/Users/Users'
import NewPlace from './containers/Place/NewPlace/NewPlace'
import UserPlaces from './containers/Place/UserPlaces/UserPlaces'
import UpdatePlace from './containers/Place/UpdatePlace/UpdatePlace'

import MainNavigation from './components/shared/Navigation/MainNavigation/MainNavigation'

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact component={Users} />
          <Route path='/places/new' exact component={NewPlace} />
          <Route path='/places/:placeId' exact component={UpdatePlace} />
          <Route path='/:userId/places' exact component={UserPlaces} />
          <Route path='/auth' exact>
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App

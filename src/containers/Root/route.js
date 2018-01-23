import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from '../Home/Home'
import MyPage from '../MyPage/MyPage'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/mypage" component={MyPage}></Route>
      </Switch>
    </Router>
  )
}

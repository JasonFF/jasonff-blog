import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home'
import MyPage from './containers/MyPage/MyPage'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/mypage" component={MyPage}></Route>
    </Switch>
  )
}

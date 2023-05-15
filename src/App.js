import React from 'react';
import {BrowserRouter as Router, Route , Redirect,Switch} from 'react-router-dom';

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
// ES
import MainNavigation from './shared/components/Navigation/MainNavigation';
// 라우터를 사용하는 앱 일부 감싸기 
// Route의 경우 Router가 감싸고 있을 때만 사용 가능
const App =() => {
  return (
  <Router>
    <MainNavigation/>
    <main>
      <Switch>
        <Route path = "/users">
          <Users/>
        </Route>
        <Route path = "/newplace">
          <NewPlace/>
        </Route>
        <Redirect to = "/users" /> 
        {/* /뒤에 뭐가 오더라도 같은 곳을 가게*/}
      </Switch>
    </main>

  </Router>);
}

export default App;

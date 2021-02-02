import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Dashboard,
  BookedAppointments,
  UsersSearch,
  SignIn,
  PageNotFound,
} from '../pages';

import NavBar from '../NavBar';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/signIn" component={SignIn} />
      <Route
        exact
        path={['/', '/bookedAppointments', '/usersSearch']}
        component={NavBar}
      />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/bookedAppointments" component={BookedAppointments} />
      <Route exact path="/usersSearch" component={UsersSearch} />

      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;

import React, { Component, lazy, Suspense } from 'react';
import AppBar from './HeaderMenu/AppBar';
import { Switch, Route } from 'react-router-dom';
import * as authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.jsx' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView.jsx' /* webpackChunkName: "register-view" */
  ),
);

const LoginView = lazy(() =>
  import(
    './views/LoginView/LoginView.jsx' /* webpackChunkName: "login-view" */
  ),
);

const ContactView = lazy(() =>
  import(
    './views/ContactView/ContactView.jsx' /* webpackChunkName: "Contact-view" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<p>Loading in progress...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path={'/register'} component={RegisterView} />
            <Route path={'/login'} component={LoginView} />
            <Route path={'/contacts'} component={ContactView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

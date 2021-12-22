import React, { Component, lazy, Suspense } from 'react';
import AppBar from './components/AppBar';
import { Switch } from 'react-router-dom';
import * as authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Container from './components/Container/Container';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView.jsx' /* webpackChunkName: "register-view" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView.jsx' /* webpackChunkName: "login-view" */),
);

const ContactView = lazy(() =>
  import('./views/ContactView.jsx' /* webpackChunkName: "Contact-view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading in progress...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />

            <PublicRoute
              path={'/register'}
              restricted
              component={RegisterView}
            />

            <PublicRoute path={'/login'} restricted component={LoginView} />

            <PrivateRoute path={'/contacts'} component={ContactView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

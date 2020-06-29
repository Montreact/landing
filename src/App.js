import React, { Suspense, lazy } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './style/base.scss';
import { connect } from 'react-redux';
import store from './store';

const Home = lazy(() => import('./components/Home'));
const Store = lazy(() => import('./components/Store'));
const Team = lazy(() => import('./components/Team'));
const Plans = lazy(() => import('./components/Plans'));
const Generic = lazy(() => import('./components/Generic'));
const Elements = lazy(() => import('./components/Elements'));
const Nav = lazy(() => import('./components/Nav'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    const state = store.getState();

    var Loading = (
      <div
        className={'fallback-loading'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '40px',
          fontWeight: '800',
        }}
      >
        Loading...
      </div>
    );

    return (
      <Suspense fallback={Loading}>
        <HashRouter>
          <Nav login={this.login} logout={this.logout} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/store' component={Store} />
            <Route exact path='/plans' component={Plans} />
            <Route exact path='/team' component={() => <Team user={this.state.user}></Team>} />
            <Route exact path='/generic' component={Generic} />
            <Route exact path='/elements' component={Elements} />
          </Switch>
        </HashRouter>
      </Suspense>
    );
  }
}

export default connect(state => state)(App);

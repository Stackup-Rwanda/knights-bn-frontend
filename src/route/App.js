import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LandingPage from '../containers/LandingPage';
import ModifyPasswordContainer from '../components/resetPassword/ModifyPasswordPage';
import ResetPassword from '../components/resetPassword/ResetPasswordPage';


const App = () => (
  <div>
    <Route>
      <Nav />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/landing" exact component={LandingPage} />
        <Route path="/password/reset/" exact component={ModifyPasswordContainer} />
        <Route path="/forgetpassword" exact component={ResetPassword} />
      </Switch>
      <Footer />
    </Route>
  </div>
);
export default App;

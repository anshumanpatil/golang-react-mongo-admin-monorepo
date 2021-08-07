import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../Auth/Login/Login';
import { Register } from '../Auth/Register/Register';
import { Forgot } from '../Auth/Forgot/Forgot';
import { Dashboard } from '../Dashboard/Dashboard';
import './Base.css';

export const Base = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}


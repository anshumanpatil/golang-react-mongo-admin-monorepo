import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons';

import '../../Sections/CustomCss/Auth.css';
import { SocialAuthLinks } from '../../Sections/SocialAuthLinks';
import { LoginLogo } from '../../Sections/LoginLogo';

export const Login = props => {
  const history = useHistory();

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <LoginLogo boldText="Admin" smallText="Panel" />
        <Card>
          <Card.Body className="login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Mobile Number" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <FontAwesomeIcon icon={faAddressBook} />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="col-4">
                <button type="button" className="btn btn-primary btn-block" onClick={() => history.push('/dashboard')}>Sign In</button>
              </div>
            </div>

            <SocialAuthLinks />

            <p className="mb-1">
              <a>I forgot my password</a>
            </p>
            <p className="mb-0">
              <Link to="/register" className="text-center">Register a new membership</Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
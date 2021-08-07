import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import '../../Sections/CustomCss/Auth.css';
import { SocialAuthLinks } from '../../Sections/SocialAuthLinks';
import { LoginLogo } from '../../Sections/LoginLogo';

export const Register = props => {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <LoginLogo boldText="Admin" smallText="Panel" />
        <Card>
          <Card.Body className="login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
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
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
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
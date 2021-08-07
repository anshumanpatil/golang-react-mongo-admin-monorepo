import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons';

import '../../Sections/CustomCss/Auth.css';
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

            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Retype Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>

            <div className="row">
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>


            <p className="mb-0">
              <Link to="/" className="text-center">Return to Login</Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
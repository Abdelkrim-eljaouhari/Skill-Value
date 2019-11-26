import React from 'react';
import Logo from './Logo.js';
function Login() {
  return (
    <div className="Login-page">
      <div className="form-wrapper-box">
        <Logo />
        <section>
          <form>
            <div className="form-group">
              <span className="login-input-icons">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control login-input"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <span className="login-input-icons">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control login-input"
                placeholder="Password"
              />
            </div>
            <a>Forgot your password</a>
            <br />
            <button className="btn btn-primary overideBtnColor">Log in</button>
          </form>
        </section>
        <footer>
          <span>Don't have an account ?</span>
          <span>
            <a href="#">Sing up</a>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Login;

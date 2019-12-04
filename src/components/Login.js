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
                placeholder="E-mail "
              />
            </div>
            <div className="form-group">
              <span className="login-input-icons">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control login-input"
                placeholder="Le mot de pass"
              />
            </div>
            <a href="https://www.pyxicom.com/" target="_blank">
              Forgot your password
            </a>
            <br />
            <button className="btn btn-primary overideBtnColor">Log in</button>
          </form>
        </section>
        <footer>
          <span>Vous n'avez pas un compte ?</span>
          <span>
            <a href="https://www.pyxicom.com/" target="_blank">
              Sing up
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Login;

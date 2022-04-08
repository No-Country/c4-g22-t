import "./index.css";
function AddFormLogin() {
  return (
    <div className="afl-container">
      <form className="form-login-container">
        <div className="full-width">
          <h2 className="form-title text-align-center">Login</h2>
          <h3 className="form-body text-align-center">Please login using account detail bellow.</h3>
        </div>
        <div className="full-width form-inputs-container">
          <label>
            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <label>
            <input className="form-input" type="text" placeholder="Password" />
          </label>
        </div>
        <div className="full-width">
          <h3 className="form-body">Forgot your password?</h3>
        </div>
        <div className="full-width">
          <button className="form-login__button--send">Sign In</button>
        </div>
        <div className="full-width">
          <h3 className="form-body text-align-center">Don’t have an Account?Create account</h3>
        </div>
      </form>
    </div>
  );
}
export default AddFormLogin;

import "./AddFormRegister.css";
function AddFormRegister() {
  return (
    <div className="afl-container">
      <form className="form-register-container">
        <div className="full-width">
          <h2 className="form-title text-align-center">Register</h2>
          <h3 className="form-body text-align-center">
            Please register using account detail bellow.
          </h3>
        </div>
        <div className="full-width form-inputs-container">
          <label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter your first name"
            />
          </label>
          <label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter your last name"
            />
          </label>
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
          <label>
            <input
              className="form-input"
              type="text"
              placeholder="Repeat Password"
            />
          </label>
        </div>
        <div className="full-width">
          <button className="form-register__button--send">
            Create Account
          </button>
        </div>
        <div className="full-width">
          <h3 className="form-body text-align-center">
            You have an Account?{" "}
            <a className="form-body" href="/log%20in">
              Log in
            </a>
          </h3>
        </div>
      </form>
    </div>
  );
}
export default AddFormRegister;

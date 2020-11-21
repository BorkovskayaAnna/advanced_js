import React from "react";
import withForm from "../HOC/withForm";

const checkboxStyle = {
  marginRight: '10px',
  width: '20px',
  height: '20px',
}

const RegisterForm = ({ data, checked, handleCheck, handleChange, handleSubmit }) => (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <input
              onChange={handleChange}
              value={data.login}
              name="login"
              className="form-control"
              placeholder="Login"
          />
        </div>

        <div className="form-group">
          <input
              onChange={handleChange}
              value={data.email}
              name="email"
              className="form-control"
              placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
              onChange={handleChange}
              value={data.password}
              name="password"
              className="form-control"
              placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
              onChange={handleChange}
              value={data.passwordConfirm}
              name="passwordConfirm"
              className="form-control"
              placeholder="Password confirmation"
          />
        </div>

        <div className="form-group">
          <input
              type="checkbox"
              onChange={handleCheck}
              checked={checked}
              name="agreement"
              style={checkboxStyle}
          />
          <span>I agree</span>
        </div>

        <button className="btn btn-success">Register</button>
      </form>
    </div>
)


export default withForm(RegisterForm);

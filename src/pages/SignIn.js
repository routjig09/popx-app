import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEnabled = email.trim().length > 0 && password.trim().length > 0;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isEnabled) {
      navigate('/profile');
    }
  };

  return (
    <div className="signin-screen">
      <div className="signin-header">
        <h1 className="signin-title">Signin to your<br />PopX account</h1>
        <p className="signin-sub">Enter your credentials below</p>
      </div>

      <form className="signin-form" onSubmit={handleLogin}>
        {/* Email */}
        <div className="field-group">
          <label className="field-label" htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="field-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="field-group">
          <label className="field-label" htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            id="password"
            type="password"
            className="field-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`login-btn ${isEnabled ? 'enabled' : 'disabled'}`}
          disabled={!isEnabled}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;

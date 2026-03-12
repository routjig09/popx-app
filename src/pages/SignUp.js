import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile', { state: form });
  };

  return (
    <div className="signup-screen">
      <div className="signup-header">
        <h1 className="signup-title">Create your<br />PopX account</h1>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="field-group">
          <label className="field-label" htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="field-input"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number */}
        <div className="field-group">
          <label className="field-label" htmlFor="phone">
            Phone Number <span className="required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="field-input"
            placeholder="+91 00000-00000"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        {/* Email Address */}
        <div className="field-group">
          <label className="field-label" htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="field-input"
            placeholder="Marry@Gmail.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="field-group">
          <label className="field-label" htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="field-input"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {/* Company Name */}
        <div className="field-group">
          <label className="field-label" htmlFor="company">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="field-input"
            placeholder="Acme Corp"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        {/* Are you an Agency? */}
        <div className="field-group">
          <p className="field-label agency-label">
            Are you an Agency? <span className="required">*</span>
          </p>
          <div className="radio-row">
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;

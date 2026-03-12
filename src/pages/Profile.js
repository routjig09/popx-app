import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const location = useLocation();
  const user = location.state || {};

  const name = user.fullName || 'Marry Doe';
  const email = user.email || 'Marry@Gmail.Com';
  const company = user.company || '';
  const avatarLetter = name.charAt(0).toUpperCase();

  return (
    <div className="profile-screen">
      {/* Top Section: Avatar + Name + Email */}
      <div className="profile-top">
        <div className="avatar-wrapper">
          <div className="avatar-img">
            <div className="avatar-placeholder">{avatarLetter}</div>
          </div>
          {/* Purple camera badge */}
          <div className="avatar-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-email">{email}</p>
          {company && <p className="profile-company">{company}</p>}
        </div>
      </div>

      {/* Divider */}
      <div className="profile-divider" />

      {/* Bio / Description */}
      <div className="profile-bio">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      {/* Bottom Divider */}
      <div className="profile-divider dashed" />
    </div>
  );
}

export default Profile;

import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <section className="header">
        <div className="header-logo">
          <figure>
            <img
              src="https://static.tneaonline.org/tn_logo.png"
              alt="TNEA-logo"
              className="logo"
            />
          </figure>
        </div>
        <div className="header-text">
          <h1 className="h6">Government of Tamil Nadu</h1>
          <h1 className="h6">Tamil Nadu Engineering Admissions - 2024</h1>
        </div>
      </section>
    </>
  );
}

export default Header
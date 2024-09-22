import React from 'react'

const Preview = ({ data, next, back }) => {
  return (
    <>
      <div className="formRender previewNav">
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Personal Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Special Reservation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Scholarship Info</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">School of Study</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Academic Info</a>
            </li>
          </ul>
        </nav>
        <div className="card container-fluid my-5 custom-container">
          <div className="card-header"></div>
        </div>
      </div>
      <div className="d-flex justify-content-end me-5 mt-2">
        <button className="btn btn-secondary me-3" onClick={back}>Back</button>
        <button type="submit" onClick={next} className="btn btn-primary">
          Continue to Pay
        </button>
      </div>
    </>
  );
}

export default Preview
import React from "react";

function Upload_files() {
  return (
    <>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="aadhar_card">
          Aadhar Card
        </label>
        <input
          type="file"
          className="form-control w-100"
          id="aadhar_card"
          accept=".pdf,.jpg,.jpeg,.png"
          required
        />
        <small className="text-muted form-text fs-6">
          Only PDF, JPG, JPEG, PNG files are allowed. Max size: 5MB.
        </small>
        <div className="text-danger" id="fileError"></div>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="SSLC-marksheet">
          SSLC Marksheet
        </label>
        <input
          type="file"
          className="form-control w-100"
          id="SSLC-marksheet"
          accept=".pdf,.jpg,.jpeg,.png"
          required
        />
        <small className="form-text text-muted fs-6">
          Only PDF, JPG, JPEG, PNG files are allowed. Max size: 5MB.
        </small>
        <div className="text-danger" id="fileError"></div>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="HSLC-marksheet">
          HSLC Marksheet
        </label>
        <input
          type="file"
          className="form-control w-100"
          id="HSLC-marksheet"
          accept=".pdf,.jpg,.jpeg,.png"
          required
        />
        <small className="form-text text-muted fs-6">
          Only PDF, JPG, JPEG, PNG files are allowed. Max size: 5MB.
        </small>
        <div className="text-danger" id="fileError"></div>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="passport-photo">
          Passport-size Photo
        </label>
        <input
          type="file"
          className="form-control w-100"
          id="passport-photo"
          accept=".jpg,.jpeg,.png"
          required
        />
        <small className="form-text text-muted fs-6">
          Only JPG, JPEG, PNG files are allowed. Max size: 5MB.
        </small>
        <div className="text-danger" id="fileError"></div>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="signature">
          Signature
        </label>
        <input
          type="file"
          className="form-control w-100"
          id="signature"
          accept=".jpg,.jpeg,.png"
          required
        />
        <small className="form-text text-muted fs-6">
          Only JPG, JPEG, PNG files are allowed. Max size: 5MB.
        </small>
        <div className="text-danger" id="fileError"></div>
      </div>
    </>
  );
}

export default Upload_files;

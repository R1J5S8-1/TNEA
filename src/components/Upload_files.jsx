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
        <label className="input-group-text" htmlFor="pan_card">
          Pan Card
        </label>
        <input
          type="file"
          className="form-control w-100"
          id="pan_card"
          accept=".pdf,.jpg,.jpeg,.png"
          required
        />
        <small className="form-text text-muted fs-6">
          Only PDF, JPG, JPEG, PNG files are allowed. Max size: 5MB.
        </small>
        <div className="text-danger" id="fileError"></div>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="passport">
          Passport-size Photo
        </label>
        <input
          type="file"
          className="form-control w-100"
          id="passport"
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

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary w-50">
          Submit
        </button>
      </div>
    </>
  );
}

export default Upload_files;

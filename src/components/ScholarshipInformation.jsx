import React, { useState } from "react";

const ScholarshipInformation = ({ data, onChange, next, back }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    if (!data.parentOccupation) {
      validationErrors.parentOccupation = "Please select an option";
    }
    if (!data.annualIncome) {
      validationErrors.annualIncome = "Please enter an annual income";
    }
    if (!data.firstGraduate) {
      validationErrors.firstGraduate = "Please select an option";
    }
    if (!data.postMatricScholarship){
      validationErrors.postMatricScholarship = "Please select an option";
    }
    return validationErrors;
  }

  return (
    <>
      <div className="formRender">
        <h1 className="h4 text-center">3. Scholarship Information</h1>
        <div>
          <label htmlFor="parentOccupation" className="form-label">
            <span className="text-danger">*</span>
            Parent/Occupation:
          </label>
          <select
            name="parentOccupation"
            id="parentOccupation"
            onChange={onChange}
            value={data.parentOccupation}
            className={`form-select w-75 mb-3 ${
              errors.parentOccupation ? "is-invalid" : ""
            }`}
          >
            <option value="">Select</option>
            <option value="Government Employee">Government Employee</option>
            <option value="Private Employee">Private Employee</option>
            <option value="Business">Business</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Retired">Retired</option>
            <option value="Housewife">Housewife</option>
            <option value="Not Employed">Not Employed</option>
            <option value="Other">Other</option>
          </select>

          {errors.parentOccupation && (
            <div className="invalid-feedback text-danger">
              {errors.parentOccupation}
            </div>
          )}

          <label htmlFor="annualIncome" className="form-label">
            <span className="text-danger">*</span>
            Annual Income:
          </label>
          <input
            type="number"
            name="annualIncome"
            id="annualIncome"
            onChange={onChange}
            value={data.annualIncome}
            className={`form-control w-25 mb-3 ${
              errors.annualIncome ? "is-invalid" : ""
            }`}
            required
          />

          {errors.annualIncome && (
            <div className="invalid-feedback text-danger">
              {errors.annualIncome}
            </div>
          )}

          <label htmlFor="firstGraduate" className="form-label">
            <span className="text-danger">*</span>
            Are you a First Graduate?:
          </label>
          <br />
          <input
            type="radio"
            name="firstGraduate"
            id="firstGraduateYes"
            onChange={onChange}
            value="Yes"
            checked={data.firstGraduate === "Yes"}
            className="me-2"
          />
          <label htmlFor="firstGraduate" className="me-3">
            Yes
          </label>
          <input
            type="radio"
            name="firstGraduate"
            id="firstGraduateNo"
            onChange={onChange}
            value="No"
            checked={data.firstGraduate === "No"}
            className="me-2"
          />
          <label htmlFor="firstGraduate" className="mb-3">
            No
          </label>

          {errors.firstGraduate && (
            <div className="invalid-feedback text-danger">
              {errors.firstGraduate}
            </div>
          )}

          <br />

          <label htmlFor="postMatricScholarship" className="form-label">
            <span className="text-danger">*</span>
            Post Matric Scholarship (SC/SCA/ST/Converted Christians):
          </label>
          <br />
          <input
            type="radio"
            name="postMatricScholarship"
            id="postMatricScholarshipYes"
            onChange={onChange}
            value="Yes"
            checked={data.postMatricScholarship === "Yes"}
            className="me-2"
          />
          <label htmlFor="postMatricScholarship" className="me-3">
            Yes
          </label>
          <input
            type="radio"
            name="postMatricScholarship"
            id="postMatricScholarshipNo"
            onChange={onChange}
            value="No"
            checked={data.postMatricScholarship === "No"}
            className="me-2"
          />
          <label htmlFor="postMatricScholarship" className="mb-3">
            No
          </label>

          {errors.postMatricScholarship && (
            <div className="invalid-feedback text-danger">
              {errors.postMatricScholarship}
            </div>
          )}

          <br />
        </div>
      </div>
      <div className="d-flex justify-content-end me-5">
        <button className="btn btn-secondary me-3" onClick={back}>Back</button>
        <button type="submit" className="btn btn-primary" onClick={next}>
          Save & Continue
        </button>
      </div>
    </>
  );
};

export default ScholarshipInformation;

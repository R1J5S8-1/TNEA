import React, { useState } from "react";

const SpecialReservation = ({ data,  onChange, next, back }) => {
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const validationErrors = {};
    if (!data.sports) {
      validationErrors.sports = "Please select an option";
    }
    if (!data.exService) {
      validationErrors.exService = "Please select an option";
    }
    if (!data.differentlyAbled) {
      validationErrors.differentlyAbled = "Please select an option";
    }
    if (!data.TFC) {
      validationErrors.TFC = "Please enter a valid TFC";
    }
    return validationErrors;
  };

  return (
    <>
      <div className="formRender">
        <h1 className="h4 text-center">2. Special Reservation</h1>
        <p className="text-center">
          Registration fee Rs. 100 for each Special Category
        </p>
        <div>
          <label htmlFor="sports" className="form-label">
            <span className="text-danger">*</span>
            Whether you are a candidate for Eminent Sports person as per
            annexure-II, item No.22 of information brochure?:
          </label>
          <br />
          <input
            type="radio"
            name="sports"
            id="sportsYes"
            className="me-2"
            value="yes"
            checked={data.sports === "yes"}
            onChange={onChange}
          />
          <label htmlFor="sports" className="me-3">
            Yes
          </label>
          <input
            type="radio"
            name="sports"
            id="sportsNo"
            value="no"
            checked={data.sports === "no"}
            onChange={onChange}
            className="me-2"
          />
          <label htmlFor="sports" className="mb-3">
            No
          </label>
          {errors.sports && <div className="text-danger">{errors.sports}</div>}
          <br />

          <label htmlFor="exService" className="form-label">
            <span className="text-danger">*</span>
            Ex-Serviceman (Only Army/Navy/Air force service are Eligible)
          </label>
          <br />
          <input
            type="radio"
            name="exService"
            id="exServiceYes"
            value="yes"
            checked={data.exService === "yes"}
            onChange={onChange}
            className="me-2"
          />
          <label htmlFor="ex-Service" className="me-3">
            Yes
          </label>
          <input
            type="radio"
            name="exService"
            id="exServiceNo"
            value="no"
            checked={data.exService === "no"}
            onChange={onChange}
            className="me-2"
          />
          <label htmlFor="ex-Service" className="mb-3">
            No
          </label>
          {errors.exService && (
            <div className="text-danger">{errors.exService}</div>
          )}
          <br />

          <label htmlFor="differentlyAbled" className="form-label">
            <span className="text-danger">*</span>
            Differently Abled Person:
          </label>
          <br />
          <input
            type="radio"
            name="differentlyAbled"
            id="differentlyAbledYes"
            value="yes"
            checked={data.differentlyAbled === "yes"}
            onChange={onChange}
            className="me-2"
          />
          <label htmlFor="differentlyAbled" className="me-3">
            Yes
          </label>
          <input
            type="radio"
            name="differentlyAbled"
            id="differentlyAbledNo"
            value="no"
            checked={data.differentlyAbled === "no"}
            onChange={onChange}
            className="me-2"
          />
          <label htmlFor="differentlyAbled" className="mb-3">
            No
          </label>
          {errors.differentlyAbled && (
            <div className="text-danger">{errors.differentlyAbled}</div>
          )}
          <br />

          <label htmlFor="TFC" className="form-label">
            <span className="text-danger">*</span>
            TFC Center for certificate verification
          </label>
          <input
            type="text"
            name="TFC"
            id="TFC"
            value={data.TFC}
            onChange={onChange}
            className={`form-control w-75 ${errors.TFC ? "is-invalid" : ""} `}
            required
          />
          {errors.TFC && <div className="text-danger">{errors.TFC}</div>}
        </div>
      </div>
      <div className="d-flex justify-content-end me-5">
        <button className="btn btn-secondary me-3" onClick={back}>
          Back
        </button>
        <button type="submit" className="btn btn-primary" onClick={next}>
          Save & Continue
        </button>
      </div>
    </>
  );
};

export default SpecialReservation;

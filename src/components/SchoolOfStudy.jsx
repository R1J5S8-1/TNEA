import React,{ useState } from "react";
import TableSchoolOfStudy from "./TableSchoolOfStudy";

const SchoolOfStudy = ({ data, setData, onChange, next, back }) => {
  const [errors, setErrors] = useState({});
  const [tableError, setTableError] = useState({});


  const validateForm = () => {
    const validationErrors = {};
    if (!data.schoolCategory)
      validationErrors.schoolCategory = "School Category is required";
    if (!data.stateOfStudy)
      validationErrors.stateOfStudy = "State of Study is required";
    if (!data.schoolCivicStatus)
      validationErrors.schoolCivicStatus = "School Civic Status is required";
    if (!data.schoolOfStudyGovt)
      validationErrors.schoolOfStudyGovt = "School of Study Govt is required";
    if (!data.yearOfPassingVI)
      validationErrors.yearOfPassingVI = "Year of Passing VI is required";
    if (!data.nameOfSchoolVI)
      validationErrors.nameOfSchoolVI = "Name of School VI is required";
    if (!data.districtVI)
      validationErrors.districtVI = "District VI is required";
    if (!data.stateVI) validationErrors.stateVI = "State VI is required";
    if (!data.yearOfPassingVII)
      validationErrors.yearOfPassingVII = "Year of Passing VII is required";
    if (!data.nameOfSchoolVII)
      validationErrors.nameOfSchoolVII = "Name of School VII is required";
    if (!data.districtVII)
      validationErrors.districtVII = "District VII is required";
    if (!data.stateVII) validationErrors.stateVII = "State VII is required";
    if (!data.yearOfPassingVIII)
      validationErrors.yearOfPassingVIII = "Year of Passing VIII is required";
    if (!data.nameOfSchoolVIII)
      validationErrors.nameOfSchoolVIII = "Name of School VIII is required";
    if (!data.districtVIII)
      validationErrors.districtVIII = "District VIII is required";
    if (!data.stateVIII) validationErrors.stateVIII = "State VIII is required";
    if (!data.yearOfPassingIX)
      validationErrors.yearOfPassingIX = "Year of Passing IX is required";
    if (!data.nameOfSchoolIX)
      validationErrors.nameOfSchoolIX = "Name of School IX is required";
    if (!data.districtIX)
      validationErrors.districtIX = "District IX is required";
    if (!data.stateIX) validationErrors.stateIX = "State IX is required";
    if (!data.yearOfPassingX)
      validationErrors.yearOfPassingX = "Year of Passing X is required";
    if (!data.nameOfSchoolX)
      validationErrors.nameOfSchoolX = "Name of School X is required";
    if (!data.districtX) validationErrors.districtX = "District X is required";
    if (!data.stateX) validationErrors.stateX = "State X is required";
    if (!data.yearOfPassingXI)
      validationErrors.yearOfPassingXI = "Year of Passing XI is required";
    if (!data.nameOfSchoolXI)
      validationErrors.nameOfSchoolXI = "Name of School XI is required";
    if (!data.districtXI)
      validationErrors.districtXI = "District XI is required";
    if (!data.stateXI) validationErrors.stateXI = "State XI is required";
    if (!data.yearOfPassingXII)
      validationErrors.yearOfPassingXII = "Year of Passing XII is required";
    if (!data.nameOfSchoolXII)
      validationErrors.nameOfSchoolXII = "Name of School XII is required";
    if (!data.districtXII)
      validationErrors.districtXII = "District XII is required";
    if (!data.stateXII) validationErrors.stateXII = "State XII is required";

    if (
      parseInt(data.yearOfPassingVI) >= parseInt(data.yearOfPassingVII) ||
      parseInt(data.yearOfPassingVII) >= parseInt(data.yearOfPassingVIII) ||
      parseInt(data.yearOfPassingVIII) >= parseInt(data.yearOfPassingIX) ||
      parseInt(data.yearOfPassingIX) >= parseInt(data.yearOfPassingX) ||
      parseInt(data.yearOfPassingX) >= parseInt(data.yearOfPassingXI) ||
      parseInt(data.yearOfPassingXI) >= parseInt(data.yearOfPassingXII)
    )
      validationErrors.yearOfPassing =
        "Year of Passing should be in ascending order";

    return validationErrors;
  };

  const validateTable = () => {
    const validationErrors = {};
    const table = document.getElementById("schoolOfStudyTable");
    const rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.cells;
      const year = cells[1].firstChild.value;
      const name = cells[2].firstChild.value;
      const district = cells[3].firstChild.value;
      const state = cells[4].firstChild.value;

      if (!year)
        validationErrors[`yearOfPassing${i}`] = "Year of Passing is required";
      if (!name)
        validationErrors[`nameOfSchool${i}`] = "Name of School is required";
      if (!district) validationErrors[`district${i}`] = "District is required";
      if (!state) validationErrors[`state${i}`] = "State is required";
    }

    return validationErrors;
  };

  return (
    <>
      <div className="formRender">
        <h1 className="h4 text-center">4. School of study Information</h1>
        <div>
          <div className="row g-3 align-items-center mb-3">
            <div className="col-4">
              <label htmlFor="schoolCategory" className="col-form-label">
                <span className="text-danger">*</span>
                Category of School:
              </label>
            </div>
            <div className="col-5">
              <select
                name="schoolCategory"
                id="schoolCategory"
                onChange={onChange}
                value={data.schoolCategory}
                className="form-select "
                required
              >
                <option value="">Select</option>
                <option value="State Govt">State Govt</option>
                <option value="Central Govt">Central Govt</option>
                <option value="Govt Aided">Govt Aided</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="col-3 text-danger">
              {errors.schoolCategory ? (
                <span>{errors.schoolCategory}</span>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-4">
              <label htmlFor="stateOfStudy" className="col-form-label">
                <span className="text-danger">*</span>
                Studied VIII,IX, X, XI, XII in Tamil Nadu:
              </label>
            </div>
            <div className="col-5 ">
              <input
                type="radio"
                name="stateOfStudy"
                id="stateOfStudyYes"
                value="Yes"
                onChange={onChange}
                checked={data.stateOfStudy === "Yes"}
                className="me-2"
              />
              <label htmlFor="stateOfStudy" className="me-3">
                Yes
              </label>
              <input
                type="radio"
                name="stateOfStudy"
                id="stateOfStudyNo"
                value="No"
                onChange={onChange}
                checked={data.stateOfStudy === "No"}
                className="me-2"
              />
              <label htmlFor="stateOfStudy">No</label>
            </div>
            <div className="col-3 text-danger">
              {errors.stateOfStudy ? <span>{errors.stateOfStudy}</span> : <></>}
            </div>
          </div>

          <div className="row g-3 align-items-center-mb-3">
            <div className="col-4">
              <label htmlFor="schoolCivicStatus" className="col-form-label">
                <span className="text-danger">*</span>
                Civic status of school location (+2):
              </label>
            </div>
            <div className="col-5">
              <select
                name="schoolCivicStatus"
                id="schoolCivicStatus"
                onChange={onChange}
                value={data.schoolCivicStatus}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option value="Corporation">Corporation</option>
                <option value="Municipality">Municipality</option>
                <option value="Town Panchayat">Town Panchayat</option>
                <option value="Village Panchayat">Village Panchayat</option>
              </select>
            </div>
            <div className="col-3 text-danger">
              {errors.schoolCivicStatus ? (
                <span>{errors.schoolCivicStatus}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="row g-3 align-item-center mb-3">
            <div className="col-4">
              <label htmlFor="schoolOfStudyGovt" className="col-form-label">
                <span className="text-danger">*</span>
                Have you studied VI, VII, VIII, IX, X, XI, XII in Government
                school?:
              </label>
            </div>
            <div className="col-5">
              <input
                type="radio"
                name="schoolOfStudyGovt"
                id="schoolOfStudyGovtYes"
                value="Yes"
                onChange={onChange}
                checked={data.schoolOfStudyGovt === "Yes"}
                className="me-2 my-3"
              />
              <label htmlFor="schoolOfStudyGovt" className="me-3 ">
                Yes
              </label>
              <input
                type="radio"
                name="schoolOfStudyGovt"
                id="schoolOfStudyGovtNo"
                value="No"
                onChange={onChange}
                checked={data.schoolOfStudyGovt === "No"}
                className="me-2"
              />
              <label htmlFor="schoolOfStudyGovt">No</label>
            </div>
            <div className="col-3 text-danger">
              {errors.schoolOfStudyGovt ? (
                <span>{errors.schoolOfStudyGovt}</span>
              ) : (
                <></>
              )}
            </div>
          </div>

          <h3 className="h4">
            <span className="text-danger">*</span>
            School of study
          </h3>
          <TableSchoolOfStudy
            data={data}
            setData={setData}
            onChange={onChange}
          />
          {/* {Object.keys(errors).map((key) => (
            <div key={key} style={{ color: "red" }}>
              {errors[key]}
            </div>
          ))} */}
          {Object.keys(tableError).map((key) => (
            <div key={key} style={{ color: "red" }}>
              {tableError[key]}
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-end me-5 mt-2">
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

export default SchoolOfStudy;

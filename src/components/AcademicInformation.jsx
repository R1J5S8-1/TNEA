import React from "react";

const AcademicInformation = ({ data, onChange, next, back }) => {
  return (
    <>
      <div className="formRender">
        <h1 className="h4 text-center">5. Academic Information</h1>
        <label htmlFor="qualifyingExam" className="form-label">
          <span className="text-danger">*</span>
          Qualifying Examination:
        </label>
        <select
          name="qualifyingExam"
          id="qualifyingExam"
          className="form-select w-75 mb-3"
          onChange={onChange}
          value={data.qualifyingExam}
          required
        >
          <option value="">Select</option>
          <option value="JEE">JEE</option>
          <option value="NEET">NEET</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="boardOfExam" className="form-label">
          <span className="text-danger">*</span>
          Name of the Board of Examination:
        </label>
        <input
          type="text"
          name="boardOfExam"
          id="boardOfExam"
          onChange={onChange}
          value={data.boardOfExam}
          className="form-control mb-3 w-75"
          required
        />

        <label htmlFor="HSCRegistration No" className="form-label">
          <span className="text-danger">*</span>
          Permanent register number:
        </label>
        <input
          type="number"
          name="HSCRegistration No"
          id="HSCRegistration No"
          onChange={onChange}
          value={data.HSCRegistrationNo}
          className="form-control mb-3 w-75"
          required
        />

        <label htmlFor="HSCRollNo" className="form-label">
          <span className="text-danger">*</span>
          HSC Roll number:
        </label>
        <input
          type="number"
          name="HSCRollNo"
          id="HSCRollNo"
          onChange={onChange}
          value={data.HSCRollNo}
          className="form-control mb-3 w-75"
          required
        />

        <label htmlFor="qualifiedYear" className="form-label">
          <span className="text-danger">*</span>
          Qualified Year:
        </label>
        <select
          name="qualifiedYear"
          id="qualifiedYear"
          onChange={onChange}
          value={data.qualifiedYear}
          className="form-select mb-3 w-75"
          required
        >
          {[...Array(13).keys()].map((y) => (
            <option key={y + 2012} value={y + 2012}>
              {y + 2012}
            </option>
          ))}
        </select>

        <label htmlFor="HSCGroup" className="form-label">
          <span className="text-danger">*</span>
          HSC Group:
        </label>
        <br />
        <input
          type="radio"
          name="HSCGroup"
          id="HSCGroupAcademic"
          onChange={onChange}
          value="HSCAcademic"
          checked={data.HSCGroup === "HSCAcademic"}
          className="form-check-input me-2"
        />
        <label htmlFor="HSCGroup" className="form-check-label me-2">
          HSC Academic
        </label>
        <input
          type="radio"
          name="HSCGroup"
          id="HSCGroupVocational"
          onChange={onChange}
          value="HSCVocational"
          checked={data.HSCGroup === "HSCVocational"}
          className="form-check-input me-2"
        />
        <label htmlFor="HSCGroup" className="form-check-label mb-3">
          HSC Vocational
        </label>
        <br />

        <label htmlFor="HSCGroupCode" className="form-label">
          <span className="text-danger">*</span>
          Group Code:
        </label>
        <select
          name="HSCGroupCode"
          id="HSCGroupCode"
          onChange={onChange}
          value={data.HSCGroupCode}
          className="form-select mb-3 w-75"
          required
        >
          <option value="">Select</option>
          <option value="100">
            Physics, Chemistry, Mathematics, Biology (PCMB)
          </option>
          <option value="101">
            Physics, Chemistry, Mathematics, Computer Science (PCMC)
          </option>
          <option value="102">
            Physics, Chemistry, Botany, Zoology (PCBZ)
          </option>
          <option value="103">
            Physics, Chemistry, Mathematics, Statistics (PCMS)
          </option>
          <option value="104">
            Physics, Chemistry, Mathematics, Electronics (PCME)
          </option>
          <option value="105">
            Physics, Chemistry, Botany, Computer Science (PCBC)
          </option>
          <option value="106">
            Physics, Chemistry, Mathematics, Computer Applications (PCMA)
          </option>
          <option value="107">
            Physics, Chemistry, Mathematics, Bio-Technology (PCMBT)
          </option>
          <option value="108">
            Physics, Chemistry, Zoology, Biotechnology (PCZB)
          </option>
          <option value="109">
            Physics, Chemistry, Zoology, Computer Science (PCZC)
          </option>
          <option value="110">
            Physics, Chemistry, Botany, Biotechnology (PCBB)
          </option>
          <option value="111">
            Physics, Chemistry, Mathematics, Nutrition and Dietetics (PCMD)
          </option>
        </select>

        <label htmlFor="HSCMedium" className="form-label">
          <span className="text-danger">*</span>
          Medium of Instruction:
        </label>
        <select
          name="HSCMedium"
          id="HSCMedium"
          onChange={onChange}
          value={data.HSCMedium}
          className="form-select mb-3 w-75"
          required
        >
          <option value="">Select</option>
          <option value="Tamil">Tamil</option>
          <option value="English">English</option>
          <option value="Others">Others</option>
        </select>

        <label htmlFor="HSCMarkMax" className="form-label">
          <span className="text-danger">*</span>
          HSC Maximum (total marks):
        </label>
        <input
          type="number"
          name="HSCMarkMax"
          id="HSCMarkMax"
          onChange={onChange}
          value={data.HSCMarkMax}
          className="form-control mb-3 w-75"
          required
        />

        <label htmlFor="HSCMarkObtained" className="form-label">
          <span className="text-danger">*</span>
          HSC obtained total marks:
        </label>
        <input
          type="number"
          name="HSCMarkObtained"
          id="HSCMarkObtained"
          onChange={onChange}
          value={data.HSCMarkObtained}
          className="form-control mb-3 w-25"
          required
        />

        <label htmlFor="SSLCMarkMax" className="form-label">
          <span className="text-danger">*</span>
          SSLC maximum (total) marks:
        </label>
        <input
          type="number"
          name="SSLCMarkMax"
          id="SSLCMarkMax"
          onChange={onChange}
          value={data.SSLCMarkMax}
          className="form-control mb-3 w-75"
          required
        />

        <label htmlFor="SSLCMarkObtained" className="form-label">
          <span className="text-danger">*</span>
          SSLC obtained total marks:
        </label>
        <input
          type="number"
          name="SSLCMarkObtained"
          id="SSLCMarkObtained"
          onChange={onChange}
          value={data.SSLCMarkObtained}
          className="form-control mb-3 w-25"
          required
        />

        <label htmlFor="communityNumber" className="form-label">
          <span className="text-danger">*</span>
          Community certificate number:
        </label>
        <input
          type="number"
          name="communityNumber"
          id="communityNumber"
          onChange={onChange}
          value={data.communityNumber}
          className="form-control mb-3 w-75"
          required
        />

        <label htmlFor="nativityNumber" className="form-label">
          Nativity certificate number:
        </label>
        <input
          type="number"
          name="nativityNumber"
          id="nativityNumber"
          onChange={onChange}
          value={data.nativityNumber}
          className="form-control mb-3 w-75"
        />
      </div>
      <div className="d-flex justify-content-end me-5 mt-2">
        <button className="btn btn-secondary me-3" onClick={back}>Back</button>
        <button type="submit" onClick={next} className="btn btn-primary">
          Save & Continue
        </button>
      </div>
    </>
  );
};

export default AcademicInformation;

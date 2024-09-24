import React, { useState } from "react";
import states from "../JSON/stateTNOption.json";

const PersonalDetails = ({ data, setData, onChange, next }) => {
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [errors, setErrors] = useState({});

  const customOnChange = (e) => {
    onChange(e);
    const checked = e.target.checked;
    setIsSameAddress(checked);

    setData((prevData) => ({
      ...prevData,
      permanentAddress: checked ? prevData.address : prevData.permanentAddress,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!data.name) validationErrors.name = "Name is required";
    if (!data.parentName)
      validationErrors.parentName = "Parent Name is required";
    if (!data.address) validationErrors.address = "Address is required";
    if (!data.permanentAddress)
      validationErrors.permanentAddress = "Permanent Address is required";
    if (!data.state) validationErrors.state = "State is required";
    if (!data.district) validationErrors.district = "District is required";
    if (!data.taluk) validationErrors.taluk = "Taluk is required";
    if (!data.pincode) validationErrors.pincode = "Pincode is required";
    if (!data.nativeDistrict)
      validationErrors.nativeDistrict = "Native District is required";
    if (!data.dob) validationErrors.dob = "Date of Birth is required";
    if (!data.gender) validationErrors.gender = "Gender is required";
    if (!data.motherTongue)
      validationErrors.motherTongue = "Mother Tongue is required";
    if (!data.nationality)
      validationErrors.nationality = "Nationality is required";
    if (!data.nativity) validationErrors.nativity = "Nativity is required";
    if (!data.religion) validationErrors.religion = "Religion is required";
    if (!data.community) validationErrors.community = "Community is required";
    if (!data.caste) validationErrors.caste = "Caste is required";
    if (!data.aadhar) validationErrors.aadhar = "Aadhar number is required";

    return validationErrors;
  };

  return (
    <>
      <div className="formRender">
        <div>
          <h1 className="h4 text-center">1. Personal Details</h1>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                <span className="text-danger">*</span> Name:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.name ? "is-invalid" : ""
                }`}
                name="name"
                id="name"
                value={data.name}
                onChange={onChange}
                required
                disabled
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}

              <label htmlFor="parentName" className="form-label">
                <span className="text-danger">*</span> Name of the
                Parent/Guardian:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.parentName ? "is-invalid" : ""
                }`}
                name="parentName"
                id="parentName"
                value={data.parentName}
                onChange={onChange}
                required
              />
              {errors.parentName && (
                <div className="invalid-feedback">{errors.parentName}</div>
              )}

              <label htmlFor="address" className="form-label">
                <span className="text-danger">*</span> Communication Address:
              </label>
              <textarea
                className={`form-control mb-3 ${
                  errors.address ? "is-invalid" : ""
                }`}
                name="address"
                id="address"
                rows="5"
                value={data.address}
                onChange={onChange}
                required
              ></textarea>
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}

              <input
                type="checkbox"
                className="form-check-input me-2"
                id="checkbox"
                checked={isSameAddress}
                onChange={customOnChange}
              />
              <label htmlFor="checkbox" className="form-label mb-3">
                Same as Communication Address
              </label>

              <label htmlFor="permanentAddress" className="form-label">
                <span className="text-danger">*</span> Permanent Address:
              </label>
              <textarea
                className={`form-control mb-3 ${
                  errors.permanentAddress ? "is-invalid" : ""
                }`}
                name="permanentAddress"
                id="permanentAddress"
                rows="5"
                value={data.permanentAddress}
                onChange={onChange}
                required
              ></textarea>
              {errors.permanentAddress && (
                <div className="invalid-feedback">
                  {errors.permanentAddress}
                </div>
              )}

              <label htmlFor="state" className="form-label">
                <span className="text-danger">*</span> State:
              </label>
              <select
                name="state"
                id="state"
                className={`form-select mb-3 ${
                  errors.state ? "is-invalid" : ""
                }`}
                value={data.state}
                onChange={onChange}
                required
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
              {errors.state && (
                <div className="invalid-feedback">{errors.state}</div>
              )}

              <label htmlFor="district" className="form-label">
                <span className="text-danger">*</span> District:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.district ? "is-invalid" : ""
                }`}
                name="district"
                id="district"
                value={data.district}
                onChange={onChange}
                required
              />
              {errors.district && (
                <div className="invalid-feedback">{errors.district}</div>
              )}

              <label htmlFor="taluk" className="form-label">
                <span className="text-danger">*</span> Taluk:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.taluk ? "is-invalid" : ""
                }`}
                name="taluk"
                id="taluk"
                value={data.taluk}
                onChange={onChange}
                required
              />
              {errors.taluk && (
                <div className="invalid-feedback">{errors.taluk}</div>
              )}

              <label htmlFor="pincode" className="form-label">
                <span className="text-danger">*</span> Communication Address
                Pincode:
              </label>
              <input
                type="number"
                className={`form-control mb-3 ${
                  errors.pincode ? "is-invalid" : ""
                }`}
                name="pincode"
                id="pincode"
                value={data.pincode}
                onChange={onChange}
                required
              />
              {errors.pincode && (
                <div className="invalid-feedback">{errors.pincode}</div>
              )}

              <label htmlFor="nativeDistrict" className="form-label">
                <span className="text-danger">*</span> Native District:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.nativeDistrict ? "is-invalid" : ""
                }`}
                name="nativeDistrict"
                id="nativeDistrict"
                value={data.nativeDistrict}
                onChange={onChange}
                required
              />
              {errors.nativeDistrict && (
                <div className="invalid-feedback">{errors.nativeDistrict}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">
                <span className="text-danger">*</span> Date of Birth
                (DD-MM-YYYY):
              </label>
              <input
                type="date"
                className={`form-control mb-3 ${
                  errors.dob ? "is-invalid" : ""
                }`}
                name="dob"
                id="dob"
                value={data.dob}
                onChange={onChange}
                required
                disabled
              />
              {errors.dob && (
                <div className="invalid-feedback">{errors.dob}</div>
              )}

              <label className="form-label">
                <span className="text-danger">*</span> Gender:
              </label>
              <br />
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={data.gender === "male"}
                onChange={onChange}
                required
              />
              <label htmlFor="male" className="me-3">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={data.gender === "female"}
                onChange={onChange}
                required
              />
              <label htmlFor="female" className="me-3">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={data.gender === "other"}
                onChange={onChange}
                required
              />
              <label htmlFor="other">Other</label>
              {errors.gender && (
                <div className="text-danger">{errors.gender}</div>
              )}
              <br />

              <label htmlFor="motherTongue" className="form-label">
                <span className="text-danger">*</span> Mother Tongue:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.motherTongue ? "is-invalid" : ""
                }`}
                name="motherTongue"
                id="motherTongue"
                value={data.motherTongue}
                onChange={onChange}
                required
              />
              {errors.motherTongue && (
                <div className="invalid-feedback">{errors.motherTongue}</div>
              )}

              <label htmlFor="nationality" className="form-label">
                <span className="text-danger">*</span> Nationality:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.nationality ? "is-invalid" : ""
                }`}
                name="nationality"
                id="nationality"
                value={data.nationality}
                onChange={onChange}
                required
              />
              {errors.nationality && (
                <div className="invalid-feedback">{errors.nationality}</div>
              )}

              <label htmlFor="nativity" className="form-label">
                <span className="text-danger">*</span> Nativity:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.nativity ? "is-invalid" : ""
                }`}
                name="nativity"
                id="nativity"
                value={data.nativity}
                onChange={onChange}
                required
              />
              {errors.nativity && (
                <div className="invalid-feedback">{errors.nativity}</div>
              )}

              <label htmlFor="religion" className="form-label">
                <span className="text-danger">*</span> Religion:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.religion ? "is-invalid" : ""
                }`}
                name="religion"
                id="religion"
                value={data.religion}
                onChange={onChange}
                required
              />
              {errors.religion && (
                <div className="invalid-feedback">{errors.religion}</div>
              )}

              <label htmlFor="community" className="form-label">
                <span className="text-danger">*</span> Community:
              </label>
              <select
                name="community"
                id="community"
                className={`form-select mb-3 ${
                  errors.community ? "is-invalid" : ""
                }`}
                value={data.community}
                onChange={onChange}
                required
              >
                <option value="">Select</option>
                <option value="OC">OC</option>
                <option value="BC">BC</option>
                <option value="BCM">BCM</option>
                <option value="MBC/DNC">MBC/DNC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
              {errors.community && (
                <div className="invalid-feedback">{errors.community}</div>
              )}

              <label htmlFor="caste" className="form-label">
                <span className="text-danger">*</span> Caste:
              </label>
              <select
                name="caste"
                id="caste"
                className={`form-select mb-3 ${
                  errors.caste ? "is-invalid" : ""
                }`}
                value={data.caste}
                onChange={onChange}
                required
              >
                <option value="">Select</option>
                <option value="Agamudaiyan">Agamudaiyan</option>
                <option value="Ambalakarar">Ambalakarar</option>
                <option value="Arayar">Arayar</option>
                <option value="Asari">Asari</option>
                <option value="Bharathar">Bharathar</option>
                <option value="Chakkiliyan">Chakkiliyan</option>
                <option value="Christian">Christian</option>
                <option value="Devar">Devar</option>
                <option value="Devendra Kula Vellalar">
                  Devendra Kula Vellalar
                </option>
                <option value="Gounder">Gounder</option>
                <option value="Idaiyan">Idaiyan</option>
                <option value="Isai Vellalar">Isai Vellalar</option>
                <option value="Kadaiyan">Kadaiyan</option>
                <option value="Kallar">Kallar</option>
                <option value="Kannadiyan">Kannadiyan</option>
                <option value="Kavara">Kavara</option>
                <option value="Konar">Konar</option>
                <option value="Kongu Vellala Gounder">
                  Kongu Vellala Gounder
                </option>
                <option value="Kuravar">Kuravar</option>
                <option value="Kuruba">Kuruba</option>
                <option value="Madari">Madari</option>
                <option value="Mahar">Mahar</option>
                <option value="Mannan">Mannan</option>
                <option value="Maravar">Maravar</option>
                <option value="Mukkuvar">Mukkuvar</option>
                <option value="Nadar">Nadar</option>
                <option value="Nanjan">Nanjan</option>
                <option value="Nayadi">Nayadi</option>
                <option value="Padannan">Padannan</option>
                <option value="Pallan">Pallan</option>
                <option value="Pallar">Pallar</option>
                <option value="Panan">Panan</option>
                <option value="Pannadi">Pannadi</option>
                <option value="Paraiyan">Paraiyan</option>
                <option value="Parkavakulam">Parkavakulam</option>
                <option value="Pattanavan">Pattanavan</option>
                <option value="Pattar">Pattar</option>
                <option value="Perumkollan">Perumkollan</option>
                <option value="Pidarar">Pidarar</option>
                <option value="Pillai">Pillai</option>
                <option value="Porwal">Porwal</option>
                <option value="Reddiar">Reddiar</option>
                <option value="Saliyan">Saliyan</option>
                <option value="Samban">Samban</option>
                <option value="Servai">Servai</option>
                <option value="Sri Lankan Tamil">Sri Lankan Tamil</option>
                <option value="Tamil Christian Nadar">
                  Tamil Christian Nadar
                </option>
                <option value="Tamil Jains">Tamil Jains</option>
                <option value="Thigala">Thigala</option>
                <option value="Thuluva Vellala">Thuluva Vellala</option>
                <option value="Valaiyan">Valaiyan</option>
                <option value="Vannan">Vannan</option>
                <option value="Vanniyar">Vanniyar</option>
                <option value="Velama">Velama</option>
                <option value="Velar">Velar</option>
                <option value="Vellalar">Vellalar</option>
                <option value="Vettuva Gounder">Vettuva Gounder</option>
                <option value="Yadava">Yadava</option>
              </select>
              {errors.caste && (
                <div className="invalid-feedback">{errors.caste}</div>
              )}

              <label htmlFor="aadhar" className="form-label">
                <span className="text-danger">*</span> Aadhar Number:
              </label>
              <input
                type="text"
                className={`form-control mb-3 ${
                  errors.aadhar ? "is-invalid" : ""
                }`}
                name="aadhar"
                id="aadhar"
                value={data.aadhar}
                onChange={onChange}
                required
              />
              {errors.aadhar && (
                <div className="invalid-feedback">{errors.aadhar}</div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-end me-5">
            <button type="button" className="btn btn-primary" onClick={next}>
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;

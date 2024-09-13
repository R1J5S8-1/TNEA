import React, { useState } from "react";

function Personal_Details() {
  // State for form fields
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    fathername: "",
    rollNo: "",
    schoolName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "male",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    // Basic validation rules
    if (!formValues.fname) newErrors.fname = "First name is required.";
    if (!formValues.lname) newErrors.lname = "Last name is required.";
    if (!formValues.fathername)
      newErrors.fathername = "Father's name is required.";
    if (!formValues.rollNo) newErrors.rollNo = "HSC Roll No is required.";
    if (!formValues.schoolName)
      newErrors.schoolName = "School name is required.";
    if (!formValues.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formValues.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formValues.mobile)) {
      newErrors.mobile = "Mobile number must be a 10-digit number.";
    }
    if (!formValues.dob) newErrors.dob = "Date of Birth is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission if valid
      console.log("Form submitted:", formValues);
    }
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <label htmlFor="fname" className="input-group-text">
              First Name :
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="form-control"
              value={formValues.fname}
              onChange={handleChange}
              required
            />
            {errors.fname && <p className="text-danger">{errors.fname}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <label htmlFor="lname" className="input-group-text">
              Last Name :
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="form-control"
              value={formValues.lname}
              onChange={handleChange}
              required
            />
            {errors.lname && <p className="text-danger">{errors.lname}</p>}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <label htmlFor="fathername" className="input-group-text">
              Father's Name
            </label>
            <input
              type="text"
              id="fathername"
              name="fathername"
              className="form-control"
              value={formValues.fathername}
              onChange={handleChange}
              required
            />
            {errors.fathername && (
              <p className="text-danger">{errors.fathername}</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <label htmlFor="rollNo" className="input-group-text">
              HSC Roll No :
            </label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              className="form-control"
              value={formValues.rollNo}
              onChange={handleChange}
              required
            />
            {errors.rollNo && <p className="text-danger">{errors.rollNo}</p>}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="input-group mb-3">
          <label htmlFor="schoolName" className="input-group-text">
            School Name :
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            className="form-control"
            value={formValues.schoolName}
            onChange={handleChange}
            required
          />
          {errors.schoolName && (
            <p className="text-danger">{errors.schoolName}</p>
          )}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <label htmlFor="category" className="input-group-text">
              Category :
            </label>
            <select
              id="category"
              name="category"
              className="form-select"
              value={formValues.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="GEN">GEN</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category}</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <label htmlFor="nationality" className="input-group-text">
              Nationality :
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              className="form-control"
              value={formValues.nationality}
              onChange={handleChange}
              required
            />
            {errors.nationality && (
              <p className="text-danger">{errors.nationality}</p>
            )}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <label htmlFor="board" className="input-group-text">
              Board :
            </label>
            <input
              type="text"
              id="board"
              name="board"
              className="form-control"
              value={formValues.board}
              onChange={handleChange}
              required
            />
            {errors.board && <p className="text-danger">{errors.board}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <label htmlFor="percentage" className="input-group-text">
              Percentage :
            </label>
            <input
              type="text"
              id="percentage"
              name="percentage"
              className="form-control"
              value={formValues.percentage}
              onChange={handleChange}
              required
            />
            {errors.percentage && (
              <p className="text-danger">{errors.percentage}</p>
            )}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          {/* <!-- mail --> */}
          <div className="input-group mb-3">
            <label htmlFor="email" className="input-group-text">
              Email :{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
        </div>
        <div className="col-md-6">
          {/* <!-- mobile --> */}
          <div className="input-group mb-3">
            <label htmlFor="mobile" className="input-group-text">
              Mobile :
            </label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              className="form-control"
              value={formValues.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
          </div>
        </div>
      </div>
      {/* <!-- dob and gender --> */}
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <label htmlFor="dob" className="input-group-text">
              Date of Birth :
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={formValues.dob}
              onChange={handleChange}
              required
            />
            {errors.dob && <p className="text-danger">{errors.dob}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <label htmlFor="gender" className="input-group-text">
              Gender :
            </label>
            <select
              name="gender"
              id="gender"
              className="form-select"
              value={formValues.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Personal_Details;

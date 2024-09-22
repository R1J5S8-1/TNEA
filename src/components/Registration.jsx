import { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    qualifyingExam: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log(data);
    } else {
      console.log(errors);
    }
  };

  const validate = () => {
    const {
      name,
      email,
      mobile,
      dob,
      qualifyingExam,
      password,
      confirmPassword,
    } = data;
    const errors = {};

    if (!name) errors.name = "Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/i.test(mobile)) {
      errors.mobile = "Invalid mobile number";
    }

    if (!dob) errors.dob = "Date of birth is required";
    else if (!/^\d{4}-\d{2}-\d{2}$/i.test(dob))
      errors.dob = "Invalid date format";

    if (!qualifyingExam) errors.qualifyingExam = "Qualifying exam is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    return errors;
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            Registration
            <button className="">save</button>
          </div>
        </div>
        <div className="card-body">
          <div className="form-container">
            <div className="container mx-5 mt-4">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">
                    <span className="text-danger">*</span> Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      value={data.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      required
                    />
                    <p className="text-muted">As in 10th/HSC mark-sheet</p>
                  </div>
                </div>
                {/* Mobile Number */}
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">
                    <span className="text-danger">*</span> Mobile
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">+91</span>
                      <input
                        type="number"
                        className="form-control"
                        name="mobile"
                        id="mobile"
                        value={data.mobile}
                        onChange={handleChange}
                        placeholder="Enter Mobile Number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">
                    <span className="text-danger">*</span> Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>
                </div>
                {/* DOB */}
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">
                    <span className="text-danger">*</span> DOB (DD-MM-YYYY)
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      id="dob"
                      value={data.dob}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Qualifying Examination */}
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">
                    <span className="text-danger">*</span> Qualifying
                    Examination
                  </label>
                  <div className="col-sm-9">
                    <select
                      name="qualifyingExam"
                      id="qualifyingExam"
                      value={data.qualifyingExam}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="10th">10th</option>
                      <option value="HSC">HSC</option>
                      <option value="SSC">SSC</option>
                    </select>
                  </div>
                </div>
                {/* Password */}
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">
                    <span className="text-danger">*</span> Password
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        minLength={6}
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}"
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <p className="text-muted">
                      Minimum 6 characters, password should contain at least 1
                      uppercase, 1 lowercase, 1 number, and 1 special character.
                    </p>
                  </div>
                </div>
                {/* Confirm Password */}
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">
                    <span className="text-danger">*</span> Confirm Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={data.confirmPassword}
                      onChange={handleChange}
                      placeholder="Enter Confirm Password"
                      required
                    />
                  </div>
                </div>
                {/* save, reset and cancel buttons */}
                <div className="mb-3 row">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-9">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Reset
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration
import React from 'react'

function Personal_Details() {
  return (
    <>
    <div className="row mb-3">
        <div className="col-md-6">
            <div className="input-group">
                <label for="fname" className="input-group-text"
                      >First Name :
                </label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="form-control"
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label for="lname" className="input-group-text"
                      >Last Name :
                </label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    className="form-control"
                    required
                />
            </div>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-6">
            <div className="input-group">
                <label for="fathername" className="input-group-text"
                >Father's Name</label>
                <input
                    type="text"
                    id="fathername"
                    name="fathername"
                    className="form-control"
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label for="rollNo" className="input-group-text">HSC Roll No :</label>
                <input
                    type="text"
                    id="rollNo"
                    name="rollNo"
                    className="form-control"
                    required
                />
            </div>
        </div>
    </div>

    <div className="input-group mb-3">
        <label for="school" className="input-group-text">School Name : </label>
        <input type="text" id="school" name="school" className="form-control" required />
    </div>

    <div className="row mb-3">
        <div className="col-md-6">
                  {/* <!-- mail --> */}
            <div className="input-group mb-3">
                <label for="email" className="input-group-text">Email : </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
                  {/* <!-- mobile --> */}
            <div className="input-group mb-3">
                <label for="mobile" className="input-group-text">Mobile :</label>
                <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    className="form-control"
                    required
                />
            </div>
        </div>
    </div>
              {/* <!-- dob and gender --> */}
    <div className="row mb-3">
        <div className="col-md-6">
            <div className="input-group">
                <label for="dob" className="input-group-text">Date of Birth :</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-control"
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label for="gender" className="input-group-text">Gender :</label>
                <select name="gender" id="gender" className="form-select">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
    </div>
    </>
  )
}

export default Personal_Details
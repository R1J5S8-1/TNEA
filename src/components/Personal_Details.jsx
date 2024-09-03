import React, { useState } from 'react'

function Personal_Details() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [fathername, setfathername] = useState("");
    const [rollNo, setrollNo] = useState("");
    const [schoolName, setschoolName] = useState("");
    const [mailId, setmailId] = useState("");
    const [mobile, setmobile] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setgender] = useState("");

    // validate the form

    function validateForm() {
        if (fname === "" || lname === "" || fathername === "" || rollNo === "" || schoolName === "" || mailId === "" || mobile === "" || dob === "" || gender === "") {
            return false;
        }
        return true;
    }

  return (
    <>
    <div className="row mb-3">
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="fname" className="input-group-text"
                      >First Name :
                </label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="form-control"
                    onChange={(e) => setfname(e.target.value)}
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="lname" className="input-group-text"
                      >Last Name :
                </label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    className="form-control"
                    onChange={(e) => setlname(e.target.value)}
                    required
                />
            </div>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="fathername" className="input-group-text"
                >Father's Name</label>
                <input
                    type="text"
                    id="fathername"
                    name="fathername"
                    className="form-control"
                    onChange={(e) => setfathername(e.target.value)}
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="rollNo" className="input-group-text">HSC Roll No :</label>
                <input
                    type="text"
                    id="rollNo"
                    name="rollNo"
                    className="form-control"
                    onChange={(e) => setrollNo(e.target.value)}
                    required
                />
            </div>
        </div>
    </div>

    <div className="input-group mb-3" style={{width: "97.5%"}}>
        <label htmlFor="school" className="input-group-text">School Name : </label>
        <input type="text" id="school" name="school" className="form-control" onChange={(e) => setschoolName(e.target.value)} required />
    </div>

    <div className="row mb-3">
        <div className="col-md-6">
                  {/* <!-- mail --> */}
            <div className="input-group mb-3">
                <label htmlFor="email" className="input-group-text">Email : </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setmailId(e.target.value)}
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
                  {/* <!-- mobile --> */}
            <div className="input-group mb-3">
                <label htmlFor="mobile" className="input-group-text">Mobile :</label>
                <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    className="form-control"
                    onChange={(e) => setmobile(e.target.value)}
                    required
                />
            </div>
        </div>
    </div>
              {/* <!-- dob and gender --> */}
    <div className="row mb-3">
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="dob" className="input-group-text">Date of Birth :</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-control"
                    onChange={(e) => setdob(e.target.value)}
                    required
                />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="gender" className="input-group-text">Gender :</label>
                <select name="gender" id="gender" className="form-select" onChange={(e) => setgender(e.target.value)}>
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
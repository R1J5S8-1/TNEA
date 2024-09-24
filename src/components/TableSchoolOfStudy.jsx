import React, { useState } from "react";
import states from "../JSON/stateTNOption.json";

const TableSchoolOfStudy = ({
  data,
  setData,
  onChange,
}) => {
  
  const [isSameSchoolAsVI, setIsSameSchoolAsVI] = useState(false);
  const customOnChange = (e) => {
    onChange(e);
    const checked = e.target.checked;
    setIsSameSchoolAsVI(checked);

    if (checked) {
      setData((prevData) => ({
        ...prevData,
        nameOfSchoolVII: prevData.nameOfSchoolVI,
        stateVII: prevData.stateVI,
        districtVII: prevData.districtVI,
        yearOfPassingVII: parseInt(prevData.yearOfPassingVI) + 1,
        nameOfSchoolVIII: prevData.nameOfSchoolVI,
        stateVIII: prevData.stateVI,
        districtVIII: prevData.districtVI,
        yearOfPassingVIII: parseInt(prevData.yearOfPassingVI) + 2,
        nameOfSchoolIX: prevData.nameOfSchoolVI,
        stateIX: prevData.stateVI,
        districtIX: prevData.districtVI,
        yearOfPassingIX: parseInt(prevData.yearOfPassingVI) + 3,
        nameOfSchoolX: prevData.nameOfSchoolVI,
        stateX: prevData.stateVI,
        districtX: prevData.districtVI,
        yearOfPassingX: parseInt(prevData.yearOfPassingVI) + 4,
        nameOfSchoolXI: prevData.nameOfSchoolVI,
        stateXI: prevData.stateVI,
        districtXI: prevData.districtVI,
        yearOfPassingXI: parseInt(prevData.yearOfPassingVI) + 5,
        nameOfSchoolXII: prevData.nameOfSchoolVI,
        stateXII: prevData.stateVI,
        districtXII: prevData.districtVI,
        yearOfPassingXII: parseInt(prevData.yearOfPassingVI) + 6,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        nameOfSchoolVII: "",
        stateVII: "",
        districtVII: "",
        yearOfPassingVII: "",
        nameOfSchoolVIII: "",
        stateVIII: "",
        districtVIII: "",
        yearOfPassingVIII: "",
        nameOfSchoolIX: "",
        stateIX: "",
        districtIX: "",
        yearOfPassingIX: "",
        nameOfSchoolX: "",
        stateX: "",
        districtX: "",
        yearOfPassingX: "",
        nameOfSchoolXI: "",
        stateXI: "",
        districtXI: "",
        yearOfPassingXI: "",
        nameOfSchoolXII: "",
        stateXII: "",
        districtXII: "",
        yearOfPassingXII: "",
      }));
    }
  };

  return (
    <>
      <table
        id="schoolOfStudyTable"
        border={1}
        className="schoolOfStudyTable table table-bordered table-hover text-center"
      >
        <thead>
          <tr>
            <th>Class</th>
            <th>Year of Passing</th>
            <th>
              Name of the school
              <div>
                <input
                  type="checkbox"
                  id="sameSchoolAsVI"
                  checked={isSameSchoolAsVI}
                  onChange={customOnChange}
                />
                <label htmlFor="sameSchoolAsVI" className="ms-2 fw-normal">
                  Same as VI Std. to all
                </label>
              </div>
            </th>
            <th>District</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>VI Std.</th>
            <td>
              <select
                name="yearOfPassingVI"
                id="yearOfPassingVI"
                onChange={onChange}
                value={data.yearOfPassingVI}
                className="form-select"
              >
                <option value="">Select</option>
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={2000 + i} key={2000 + i}>
                    {2000 + i}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                name="nameOfSchoolVI"
                id="nameOfSchoolVI"
                onChange={onChange}
                value={data.nameOfSchoolVI}
                className="form-control"
                required
              />
            </td>
            <td>
              <select
                name="districtVI"
                id="districtVI"
                className="form-select"
                onChange={onChange}
                value={data.districtVI}
                required
              >
                <option value="">Select</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </td>
            <td>
              <select
                name="stateVI"
                id="stateVI"
                className="form-select w-100"
                onChange={onChange}
                value={data.stateVI}
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>VII Std.</th>
            <td>
              <select
                name="yearOfPassingVII"
                id="yearOfPassingVII"
                onChange={onChange}
                value={data.yearOfPassingVII}
                className="form-select"
                required
              >
                <option value="">Select</option>
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={2000 + i} key={2000 + i}>
                    {2000 + i}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                name="nameOfSchoolVII"
                id="nameOfSchoolVII"
                onChange={onChange}
                value={data.nameOfSchoolVII}
                className="form-control"
                required
              />
            </td>
            <td>
              <select
                name="districtVII"
                id="districtVII"
                className="form-select"
                onChange={onChange}
                value={data.districtVII}
                required
              >
                <option value="">Select</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </td>
            <td>
              <select
                name="stateVII"
                id="stateVII"
                onChange={onChange}
                value={data.stateVII}
                className="form-select w-100"
                required
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>VIII Std.</th>
            <td>
              <select
                name="yearOfPassingVIII"
                id="yearOfPassingVIII"
                onChange={onChange}
                value={data.yearOfPassingVIII}
                className="form-select"
                required
              >
                <option value="">Select</option>
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={2000 + i} key={2000 + i}>
                    {2000 + i}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                name="nameOfSchoolVIII"
                id="nameOfSchoolVIII"
                onChange={onChange}
                value={data.nameOfSchoolVIII}
                className="form-control"
                required
              />
            </td>
            <td>
              <select
                name="districtVIII"
                id="districtVIII"
                onChange={onChange}
                value={data.districtVIII}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </td>
            <td>
              <select
                name="stateVIII"
                id="stateVIII"
                onChange={onChange}
                value={data.stateVIII}
                className="form-select w-100"
                required
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>IX Std.</th>
            <td>
              <select
                name="yearOfPassingIX"
                id="yearOfPassingIX"
                onChange={onChange}
                value={data.yearOfPassingIX}
                className="form-select"
                required
              >
                <option value="">Select</option>
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={2000 + i} key={2000 + i}>
                    {2000 + i}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                name="nameOfSchoolIX"
                id="nameOfSchoolIX"
                onChange={onChange}
                value={data.nameOfSchoolIX}
                className="form-control"
                required
              />
            </td>
            <td>
              <select
                name="districtIX"
                id="districtIX"
                onChange={onChange}
                value={data.districtIX}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </td>
            <td>
              <select
                name="stateIX"
                id="stateIX"
                onChange={onChange}
                value={data.stateIX}
                className="form-select w-100"
                required
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>X Std.</th>
            <td>
              <select
                name="yearOfPassingX"
                id="yearOfPassingX"
                onChange={onChange}
                value={data.yearOfPassingX}
                className="form-select"
                required
              >
                <option value="">Select</option>
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={2000 + i} key={2000 + i}>
                    {2000 + i}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                name="nameOfSchoolX"
                id="nameOfSchoolX"
                onChange={onChange}
                value={data.nameOfSchoolX}
                className="form-control"
                required
              />
            </td>
            <td>
              <select
                name="districtX"
                id="districtX"
                onChange={onChange}
                value={data.districtX}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </td>
            <td>
              <select
                name="stateX"
                id="stateX"
                onChange={onChange}
                value={data.stateX}
                className="form-select w-100"
                required
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>XI Std.</th>
            <td>
              <select
                name="yearOfPassingXI"
                id="yearOfPassingXI"
                onChange={onChange}
                value={data.yearOfPassingXI}
                className="form-select"
              >
                <option value="">Select</option>
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={2000 + i} key={2000 + i}>
                    {2000 + i}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                name="nameOfSchoolXI"
                id="nameOfSchoolXI"
                onChange={onChange}
                value={data.nameOfSchoolXI}
                className="form-control"
                required
              />
            </td>
            <td>
              <select
                name="districtXI"
                id="districtXI"
                onChange={onChange}
                value={data.districtXI}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </td>
            <td>
              <select
                name="stateXI"
                id="stateXI"
                onChange={onChange}
                value={data.stateXI}
                className="form-select w-100"
                required
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>XII Std.</th>
            <td>
              <select
                name="yearOfPassingXII"
                id="yearOfPassingXII"
                onChange={onChange}
                value={data.yearOfPassingXII}
                className="form-select"
                required
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <option value={2000 + i} key={2000 + i}>
                    {2000 + i}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                name="nameOfSchoolXII"
                id="nameOfSchoolXII"
                onChange={onChange}
                value={data.nameOfSchoolXII}
                className="form-control"
                required
              />
            </td>
            <td>
              <select
                name="districtXII"
                id="districtXII"
                onChange={onChange}
                value={data.districtXII}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Karur">Karur</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Salem">Salem</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Theni">Theni</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Vellore">Vellore</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
              </select>
            </td>
            <td>
              <select
                name="stateXII"
                id="stateXII"
                onChange={onChange}
                value={data.stateXII}
                className="form-select w-100"
                required
              >
                {states.map((states) => (
                  <option key={states.value} value={states.value}>
                    {states.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableSchoolOfStudy;

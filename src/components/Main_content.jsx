import React, { useState, useEffect } from 'react'
import './Main_content.css'
import Personal_Details from './Personal_Details';
import Address from './Address';
import Upload_files from './Upload_files';

function Main_content() {
  const [residentialAddress, setResidentialAddress] = useState({
    address: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [permanentAddress, setPermanentAddress] = useState({
    address: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [isSameAddress, setIsSameAddress] = useState(false);

  const handleAddressChange = (type, field, value) => {
    const newAddress = { ...residentialAddress, [field]: value };
    setResidentialAddress(newAddress);

    if (type === "residential" && isSameAddress) {
      setPermanentAddress(newAddress);
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsSameAddress(checked);

    if (checked) {
      setPermanentAddress(residentialAddress);
    } else {
      setPermanentAddress({
        address: "",
        street: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      });
    }
  };

  useEffect(() => {
    if (isSameAddress) {
      setPermanentAddress(residentialAddress);
    }
  }, [residentialAddress, isSameAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(residentialAddress);
    console.log(permanentAddress);
  };

  return (
    <>
      <section className="main-body container-fluid">
        <div className="content-body">
          <div className="icon-space">
            <span className="material-symbols-outlined"> groups </span>
            <p>Welcome User</p>
          </div>
          <div className="form-space">
            <form action="" className="row g-3">
              <Personal_Details />
              <div className="row mb-3">
                <div className="col-md-6">
                  <p className="h6 ms-1">Residential Address</p>
                  <Address
                    address={residentialAddress.address}
                    street={residentialAddress.street}
                    city={residentialAddress.city}
                    state={residentialAddress.state}
                    country={residentialAddress.country}
                    pincode={residentialAddress.pincode}
                    onAddressChange={(field, value) =>
                      handleAddressChange("residential", field, value)
                    }
                  />
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between fs-6">
                    <p className="h6 ms-1">Permanent Address</p>
                    <div>
                      <small className="me-1">Same as Residential</small>
                      <input
                        type="checkbox"
                        name="sameAddress"
                        id="sameAddress"
                        checked={isSameAddress}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                  <Address
                    address={permanentAddress.address}
                    street={permanentAddress.street}
                    city={permanentAddress.city}
                    state={permanentAddress.state}
                    country={permanentAddress.country}
                    pincode={permanentAddress.pincode}
                    onAddressChange={(field, value) =>
                      handleAddressChange("permanent", field, value)
                    }
                  />
                </div>
                <Upload_files />
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary w-50" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </form>{" "}
            {/* form ends */}
          </div>{" "}
          {/* form-space ends */}
        </div>{" "}
        {/* content-body ends*/}
      </section>
    </>
  );
}

export default Main_content
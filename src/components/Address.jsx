import React, { useState } from "react";
const Address =({ address, street, city, state, country, pincode, onAddressChange }) => {
  const [errors, setErrors] = useState({
    address: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const validate = () => {
    const newErrors = {};
    if (!address) newErrors.address = "Door/Flat number is required.";
    if (!street) newErrors.street = "Street Name is required.";
    if (!city) newErrors.city = "City is required.";
    if (!state) newErrors.state = "State is required.";
    if (!country) newErrors.country = "Country is required.";
    if (!pincode || pincode.length !== 6)
      newErrors.pincode = "Pincode must be a 6-digit number.";
    return newErrors;
  };

  return (
    <>
      <div className="input-group mb-3">
        <label htmlFor="address" className="input-group-text">
          Door/Flat no. :
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="form-control"
          value={address}
          onChange={(e) => onAddressChange('address', e.target.value)}
          required
        />
        {errors.address && <p className="text-danger">{errors.address}</p>}
      </div>
      <div className="input-group mb-3">
        <label htmlFor="street" className="input-group-text">
          Street Name :
        </label>
        <input type="text" id="street" name="street" className="form-control" value={street} onChange={(e) => onAddressChange('street', e.target.value)} required />
        {errors.street && <p className="text-danger">{errors.street}</p>}
      </div>
      {/* <!-- city, pincode, state, country --> */}
      <div className="input-group mb-3">
        <label htmlFor="city" className="input-group-text">
          City :{" "}
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="form-control"
          value={city}
          onChange={(e) => onAddressChange('city', e.target.value)}
          required
        />
        {errors.city && <p className="text-danger">{errors.city}</p>}
      </div>
      <div className="input-group mb-3">
        <label htmlFor="state" className="input-group-text">
          State :{" "}
        </label>
        <input
          type="text"
          id="state"
          name="state"
          className="form-control"
          value={state}
          onChange={(e) => onAddressChange('state', e.target.value)}
          required
        />
        {errors.state && <p className="text-danger">{errors.state}</p>}
      </div>
      <div className="input-group mb-3">
        <label htmlFor="country" className="input-group-text">
          Country :
        </label>
        <input
          type="text"
          id="country"
          name="country"
          className="form-control"
          value={country}
          onChange={(e) => onAddressChange('country', e.target.value)}
          required
        />
        {errors.country && <p className="text-danger">{errors.country}</p>}
      </div>
      <div className="input-group mb-3">
        <label htmlFor="pincode" className="input-group-text">
          Pincode
        </label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          className="form-control"
          value={pincode}
          onChange={(e) => onAddressChange('pincode', e.target.value)}
          required
        />
        {errors.pincode && <p className="text-danger">{errors.pincode}</p>}
      </div>
    </>
  );
};

export default Address;

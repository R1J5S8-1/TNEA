import React from "react";
import { useState } from "react";

function Address() {
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  

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
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="input-group mb-3">
        <label htmlFor="street" className="input-group-text">
          Street Name :
        </label>
        <input type="text" id="street" name="street" className="form-control" onChange={(e) => setStreet(e.target.value)} required />
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
          onChange={(e) => setCity(e.target.value)}
          required
        />
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
          onChange={(e) => setState(e.target.value)}
          required
        />
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
          onChange={(e) => setCountry(e.target.value)}
          required
        />
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
          onChange={(e) => setPincode(e.target.value)}
          required
        />
      </div>
    </>
  );
}

export default Address;

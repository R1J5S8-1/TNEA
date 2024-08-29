import React from "react";

function Address() {
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
          required
        />
      </div>
      <div className="input-group mb-3">
        <label htmlFor="street" className="input-group-text">
          Street Name :
        </label>
        <input type="text" id="street" name="street" className="form-control" />
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
          required
        />
      </div>

      <div className="input-group mb-3">
        <label htmlFor="pincode" className="input-group-text">
          Pincode :
        </label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          className="form-control"
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
          required
        />
      </div>
    </>
  );
}

export default Address;

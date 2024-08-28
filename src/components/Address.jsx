import React from "react";

function Address() {
  return (
    <>
      <div class="input-group mb-3">
        <label for="address" class="input-group-text">
          Door/Flat no. :
        </label>
        <input
          type="text"
          id="address"
          name="address"
          class="form-control"
          required
        />
      </div>
      <div class="input-group mb-3">
        <label for="street" class="input-group-text">
          Street Name :
        </label>
        <input type="text" id="street" name="street" class="form-control" />
      </div>
      {/* <!-- city, pincode, state, country --> */}
      <div class="input-group mb-3">
        <label for="city" class="input-group-text">
          City :{" "}
        </label>
        <input
          type="text"
          id="city"
          name="city"
          class="form-control"
          required
        />
      </div>

      <div class="input-group mb-3">
        <label for="pincode" class="input-group-text">
          Pincode :
        </label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          class="form-control"
          required
        />
      </div>
      <div class="input-group mb-3">
        <label for="state" class="input-group-text">
          State :{" "}
        </label>
        <input
          type="text"
          id="state"
          name="state"
          class="form-control"
          required
        />
      </div>
      <div class="input-group mb-3">
        <label for="country" class="input-group-text">
          Country :
        </label>
        <input
          type="text"
          id="country"
          name="country"
          class="form-control"
          required
        />
      </div>
      <div class="input-group mb-3">
        <label for="pincode" class="input-group-text">
          Pincode
        </label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          class="form-control"
          required
        />
      </div>
    </>
  );
}

export default Address;

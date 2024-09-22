import React from "react";

const PaymentDetails = () => {
  return (
    <>
      <div className="formRender">
        <h1 className="h4">Important instructions</h1>
        <p>
          1. Select one of the following payment gateway to pay online. Once
          payment is made you will not be able to update any registration
          details, make sure you double check them.
        </p>
        <p>
          2. Do not pay more than once, please verify your payment status before
          making another payment. You can verify the payment status from My
          Profile -{">"} My Transactions. By mistake if you made multiple
          payments, refund will not be entertained online, any multiple payment
          refunds will be processed only offline after counselling is completed.
        </p>
        <p className="text-danger">
          3. Once payment is made money will not be refunded.
        </p>
        <p>
          4. Select one of the payment gateway to pay from Credit/Debit cards
          and Net Banking.
        </p>
        <div className="card">
          <div className="card-header small">Payment Cart</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-11 text-end">
                <p>Resitration Fee:</p>
              </div>
              <div className="col-md-1 text-end">500</div>
            </div>
            <div className="row">
              <div className="col-md-11 text-end">
                <p>Special Reservation Fee:</p>
              </div>
              <div className="col-md-1 text-end">0</div>
            </div>
            <div className="row">
              <div className="col-md-11 text-end">
                <p>Total (INR):</p>
              </div>
              <div className="col-md-1 text-end">500</div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header small">Payent Gateways</div>
          <div className="card-body g-3">
            <button className="btn btn-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9zJXsVJIWLmJtT4qcGWgs6O7NTcfX8uFrQ&s"
                alt=""
                className="bankLogo"
              />
              Canara Bank
            </button>
            <button className="btn btn-light">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Indian_Bank_logo.svg/1200px-Indian_Bank_logo.svg.png"
                alt=""
                className="bankLogo"
              />
              Indian Bank
            </button>
            <button className="btn btn-light">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png"
                alt=""
                className="bankLogo"
              />
              State Bank of India
            </button>
            <button className="btn btn-light">
              <img
                src="https://images.seeklogo.com/logo-png/52/1/indian-overseas-bank-logo-png_seeklogo-522582.png"
                alt=""
                className="bankLogo"
              />
              Indian Overseas Bank
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end me-5 mt-2">
        <button className="btn btn-secondary me-3">Back</button>
        <button type="submit" className="btn btn-primary">
          Pay
        </button>
      </div>
    </>
  );
};

export default PaymentDetails;

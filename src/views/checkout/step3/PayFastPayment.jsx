/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from 'formik';
import React from 'react';

const PayFastPayments = () => {

  return (
    <div className={`checkout-fieldset-collapse is-selected-payment`}>
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <label
            className="d-flex w-100"
            htmlFor="modePayFast"
          >
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">Payfast</h4>
              <span className="text-subtle d-block margin-top-s">
                Pay easily, fast and secure with Payfast.
              </span>
            </div>
            <div className="payment-img payment-img-paypal" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PayFastPayments;
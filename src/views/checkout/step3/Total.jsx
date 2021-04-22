import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { BasketItem } from 'components/basket';
import { CHECKOUT_STEP_2 } from 'constants/routes';
import { useFormikContext } from 'formik';
import { displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPaymentDetails } from 'redux/actions/checkoutActions';

const Total = ({ subtotal,BasketItem }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickBack = () => {
    history.push(CHECKOUT_STEP_2);
  };

  const PayfastPayment = () => {
    let PayfastConfig = {
      'amount': subtotal,
      'item_name':  BasketItem,
      'return_url': `https://master.d14qrahcewz8qq.amplifyapp.com/`,
      'cancel_url': `https://master.d14qrahcewz8qq.amplifyapp.com/`,
      'return_dev': 'https://sandbox.payfast.co.za/eng/process?merchant_id=10015422&merchant_key=ov9u3i696izit',
      'return_prod': 'https://www.payfast.co.za/eng/process?merchant_id=16281009&merchant_key=h5jxmes9n5lyq'
    };

    PayfastConfig['payment_url'] = `${PayfastConfig['return_prod']}`;
    PayfastConfig['payment_url'] += `&amount=${PayfastConfig['amount']}`;
    PayfastConfig['payment_url'] += `&item_name=${PayfastConfig['item_name']}`; 
    PayfastConfig['payment_url'] += `&return_url=${PayfastConfig['return_url']}`;
    PayfastConfig['payment_url'] += `&cancel_url=${PayfastConfig['cancel_url']}`;

    window.location.href = PayfastConfig['payment_url'];
  };

  return (
    <>
      <div className="basket-total text-right">
        <p className="basket-total-title">Total:</p>
        <h2 className="basket-total-amount">
        {displayMoney(subtotal)}
        </h2>
      </div>
      <br />
      <div className="checkout-shipping-action">
        <button
          className="button button-muted"
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp;
          Go Back
        </button>
        <button
          className="button"
          onClick={PayfastPayment}
          type="button"
        >
          <CheckOutlined />
          &nbsp;
          Go Pay
        </button>
      </div>
    </>
  );
};

Total.propTypes = {
  
  subtotal: PropType.number.isRequired
  
};

export default Total;
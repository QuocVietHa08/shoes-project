import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import './Payment.scss';
import ListCheckoutProduct from '../Checkout/ListCheckoutProduct/ListCheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../../reducer';
import axios from '../../../axios';
import { useHistory } from 'react-router-dom';
import { db } from '../../../firebase';
function Payment() {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // we will give strip expects  the total in a currencies submits
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })

      .then((paymentIntent) => {
        //paymentIntent = payment confirmation
        console.log(paymentIntent);
        console.log(user);
        console.log(basket);
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
          });

        setSucceeded(true);
        setProcessing(false);
        setError(null);
        dispatch({
          type: 'EMPTY_BASKET',
        });
        history.replace('/orders');
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
    console.log(user.email);
  };
  return (
    <div className='payment'>
      <h2>All your bill {basket.length} items</h2>

      <div className='payment__container'>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user.email}</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review item and deliver</h3>
          </div>
          <div className='payment__item'>
            <ListCheckoutProduct />
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment method</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <div>
                      <p>
                        All your bill includes ({basket.length} items) price :
                        <strong>{value}</strong>
                      </p>
                    </div>
                  )}
                  className='subtotal__currency'
                  decimalScale={1}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix='$'
                />
                <button>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

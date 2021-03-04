import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';
import { useHistory } from 'react-router-dom';
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              All your bill includes ({basket.length} items) price :
              <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </div>
        )}
        className='subtotal__currency'
        decimalScale={1}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix='$'
      />
      <button
        onClick={(e) => history.push('/payment')}
        className='subtotal__button'>
        Check the bill
      </button>
    </div>
  );
}

export default Subtotal;

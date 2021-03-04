import React from 'react';
import { useStateValue } from '../../../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.scss';
import ListCheckoutProduct from './ListCheckoutProduct/ListCheckoutProduct';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__up'>
        <div>
          <h2 className='checkout__title'>Your favourite shoes</h2>

          {/* Basket Item */}
          <div className='checkout__list'>
            <ListCheckoutProduct />
          </div>
        </div>
      </div>
      <div className='checkout__down'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

import React from 'react';
import './Order.scss';
import CheckoutProduct from '../../Checkout/CheckoutProduct/CheckoutProduct';
function Order(props) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p className='order__id'>
        <p>
          Order id: <span>{props.order.id}</span>
        </p>
      </p>
      {props.order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          img={item.img}
          title={item.title}
          rating={item.rating}
          price={item.price}
          hiddenButton
        />
      ))}
    </div>
  );
}

export default Order;

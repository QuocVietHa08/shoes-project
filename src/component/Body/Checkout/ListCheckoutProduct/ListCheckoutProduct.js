import React from 'react';
import './ListCheckoutProduct.scss';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../../../StateProvider';
function ListCheckoutProduct() {
  const [{ basket }, dispatch] = useStateValue();
  const listProduct = basket.map((item) => (
    <CheckoutProduct
      key={item.key}
      id={item.id}
      img={item.img}
      price={item.price}
      rating={item.rating}
      title={item.title}
    />
  ));
  return <div className='listCheckoutProduct'>{listProduct}</div>;
}

export default ListCheckoutProduct;

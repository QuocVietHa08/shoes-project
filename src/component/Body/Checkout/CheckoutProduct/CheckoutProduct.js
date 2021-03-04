import React from 'react';
import './CheckoutProduct.scss';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../../../StateProvider';
function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    console.log(props.id);
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: props.id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__img'>
        <img src={props.img} alt='product__img' />
      </div>
      <div className='checkoutProduct__info'>
        <div className='checkoutProduct__title'>{props.title}</div>
        <div className='checkoutProduct__price'> $ {props.price}</div>
        <div className='checkoutProduct__rating'>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <StarIcon className='checkout__icon' />
            ))}
        </div>
        <div className='checkoutProduct__button'>
          {props.hiddenButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    </div>
  );
}
export default CheckoutProduct;

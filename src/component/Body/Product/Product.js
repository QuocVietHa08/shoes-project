import React from 'react';
import './Product.scss';
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from '../../../StateProvider';
function Product(props) {
  // we use the basket variable that mean when every we add some thing into the basket
  // that product with be added into the basket
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch an action
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        img: props.img,
        title: props.title,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__image'>
        <img src={props.img} alt='product__image' />
      </div>

      <div className='product__info'>
        <div className='product__title'>
          <strong>{props.title}</strong>
        </div>
        <div className='product__moreInfo'>
          <div className='product__rating'>
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <StarIcon style={{ color: 'yellow' }} />
              ))}
          </div>
          <div className='product__price'>
            <strong>${props.price}</strong>
          </div>
        </div>
        <div className='product__button'>
          <FavoriteBorderIcon className='product__like' />
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;

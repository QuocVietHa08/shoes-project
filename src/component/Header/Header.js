import React from 'react';
import './Header.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='header'>
      {/* logo banner */}
      <Link to='/'>
        <h1>KUN</h1>
      </Link>

      {/* input section */}
      <div className='header__search'>
        <div>
          <input
            type='text'
            className='header__searchIn'
            placeholder='Find your shoes'></input>
        </div>
        <div className='header__searchIcon'>
          <SearchIcon />
        </div>
      </div>

      {/* check out and account page */}
      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <AccountCircleIcon></AccountCircleIcon>
          </div>
        </Link>
        <Link to='/payment'>
          <div className='header__option'>
            <CheckBoxIcon />
          </div>
        </Link>
        <Link to='/orders'>
          <div className='header__option'>
            <ExpandMoreIcon />
          </div>
        </Link>

        <Link to='checkout'>
          <div className='header__option'>
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </div>
        </Link>
        <Link to='checkout'>
          <div className='header__option'>
            <span className='header__basketCount'>
              {
                // the ? market call option changing
                basket?.length
              }
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

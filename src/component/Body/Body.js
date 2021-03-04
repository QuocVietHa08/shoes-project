import React from 'react';
import './Body.scss';
import SimpleSlider from '../UI/SimpleSlider/SimpleSlider';
import Product from './Product/Product';
function Body() {
  return (
    <div className='body'>
      <div className='body__slider'>
        <SimpleSlider />
      </div>
      <div className='body__title'>
        <h2>Nike and jordan</h2>
        <small>Where you can find your dream shoes</small>
      </div>
      <div className='body__product'>
        <div className='body__productRow'>
          <Product
            key={1}
            id={Math.random()}
            title='Jordan 4 Retro Levi White'
            img='
           https://stockx-360.imgix.net/Air-Jordan-4-Retro-Levis-White/Images/Air-Jordan-4-Retro-Levis-White/Lv2/img20.jpg?auto=format,compress&q=90&updated_at=1606317800&w=1000'
            rating={5}
            price={678}
          />
          <Product
            key={2}
            id={Math.random()}
            title='Jordan 3 Retro White Cement'
            img='https://stockx-360.imgix.net/Air-Jordan-3-Retro-White-Cement-88-2013/Images/Air-Jordan-3-Retro-White-Cement-88-2013/Lv2/img19.jpg?auto=format,compress&q=90&updated_at=1606317231&w=1000'
            price={483}
            rating={5}
          />
          <Product
            key={3}
            id={Math.random()}
            title='Jordan 4 Retro Metallic '
            img='https://stockx-360.imgix.net/Air-Jordan-4-Retro-White-Court-Purple/Images/Air-Jordan-4-Retro-White-Court-Purple/Lv2/img19.jpg?auto=format,compress&q=90&updated_at=1606315846&w=1000'
            price={329}
            rating={5}
          />
          <Product
            key={4}
            id={Math.random()}
            title='Jordan 4 Retro Classic'
            img='https://stockx-360.imgix.net/Air-Jordan-4-Retro-Classic-Green/Images/Air-Jordan-4-Retro-Classic-Green/Lv2/img14.jpg?auto=format,compress&q=90&updated_at=1608514694&w=1000g'
            price={455}
            rating={4}
          />
        </div>
      </div>
      <div className='body__title'>
        <h2>Adidas</h2>
        <small>Simple design with simple meaning</small>
      </div>
      <div className='body__product'>
        <div className='body__productRow'>
          <Product
            key={5}
            id={Math.random()}
            title='adidas Yeezy Boost 350 '
            img='https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Natural/Images/adidas-Yeezy-Boost-350-V2-Natural/Lv2/img19.jpg?auto=format,compress&q=90&updated_at=1609349728&w=1000'
            price={265}
            rating={4}
          />
          <Product
            key={6}
            id={Math.random()}
            title='adidas Ultra Boost'
            img='https://stockx-360.imgix.net/adidas-Ultra-Boost-4-0-Running-White/Images/adidas-Ultra-Boost-4-0-Running-White/Lv2/img20.jpg?auto=format,compress&q=90&updated_at=1612900601&w=1000'
            price={122}
            rating={5}
          />
          <Product
            key={7}
            id={Math.random()}
            title='adidas super sleek boost'
            img='https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/e3b7afee4a8a43f8a3cfaccb00fb87f2_faec/Super_Sleek_Boots_White_GX2782_HM1.jpg'
            price={235}
            rating={4}
          />
          <Product
            key={10}
            id={Math.random()}
            title='adidas original forum mid shoes'
            img='https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/7573a558c5274f129ec3accb00fb7456_faec/Forum_Mid_Shoes_Silver_GW2858_HM1.jpg'
            price={220}
            rating={5}
          />
        </div>
      </div>
      <div className='body__title'>
        <h2>Converse</h2>
        <small>Bring the comfortable to your feet</small>
      </div>
      <div className='body__product'>
        <div className='body__productRow'>
          <Product
            key={11}
            id={Math.random()}
            title='Converse Chuck Taylor All-Star 70s '
            img='https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-Black/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-Black/Lv2/img20.jpg?auto=format,compress&q=90&updated_at=1607647392&w=1000'
            price={150}
            rating={3}
          />
          <Product
            key={11}
            id={Math.random()}
            title='Converse Chuck Taylor All-Star 70s'
            img='https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-White/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-White/Lv2/img20.jpg?auto=format,compress&q=90&updated_at=1607647598&w=1000'
            price={152}
            rating={5}
          />
          <Product
            key={12}
            id={Math.random()}
            title='Hi Comme des Garcons Play Multi-Heart White'
            img='https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-Play-Multi-Heart-White/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-Play-Multi-Heart-White/Lv2/img19.jpg?auto=format,compress&q=90&updated_at=1614263135&w=1000'
            price={133}
            rating={4}
          />
          <Product
            key={13}
            id={Math.random()}
            title='Hi Chinatown Market UV'
            img='https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Chinatown-Market/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Chinatown-Market/Lv2/img20.jpg?auto=format,compress&q=90&updated_at=1613583837&w=1000'
            price={98}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;

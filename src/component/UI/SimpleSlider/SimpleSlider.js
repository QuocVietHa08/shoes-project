import React, { Component } from 'react';
import Slider from 'react-slick';
import { img1, img2, img3 } from '../../Body/BodyData';
import './SimpleSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className='simpleSlider'>
        <Slider {...settings} className='simpleSlider'>
          <div>
            <img src={img1} alt='img1' />
          </div>
          <div>
            <img src={img2} alt='img2' />
          </div>
          <div>
            <img src={img3} alt='img3' />
          </div>
        </Slider>
      </div>
    );
  }
}

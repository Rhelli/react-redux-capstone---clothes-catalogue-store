/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styles from './ProductImageComponent.module.scss';

SwiperCore.use([Navigation, Scrollbar, A11y]);

const ProductImageComponent = ({ images, brandName, type }) => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    navigation
    onSlideChange={() => console.log('slide change')}
    onSwiper={swiper => console.log(swiper)}
    className={styles.swiperGallery}
  >
    {
      images.map((image, index) => (
        <SwiperSlide className={styles.swiperGallerySlide} key={`${brandName}-${index}`}>
          <img className={styles.swiperGalleryImage} src={image} alt={`${brandName} ${type}`} />
        </SwiperSlide>
      ))
    }
  </Swiper>
);

ProductImageComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  brandName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductImageComponent;

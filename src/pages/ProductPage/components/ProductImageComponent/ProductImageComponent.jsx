/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styles from './ProductImageComponent.module.scss';

SwiperCore.use([Pagination, Scrollbar, A11y]);

const ProductImageComponent = ({ images, brandName, type }) => {
  const mqxs = window.matchMedia('(max-width: 468px)');
  const mqs = window.matchMedia('(max-width: 768px)');
  const mqm = window.matchMedia('(max-width: 1024px)');
  const mql = window.matchMedia('(max-width: 1200px)');

  return mqxs.matches ? (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination
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
  ) : mqs.matches ? (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      pagination
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
  ) : mqm.matches ? (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      pagination
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
  ) : mql.matches ? (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      pagination
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
  ) : (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      pagination
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
};

ProductImageComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  brandName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductImageComponent;

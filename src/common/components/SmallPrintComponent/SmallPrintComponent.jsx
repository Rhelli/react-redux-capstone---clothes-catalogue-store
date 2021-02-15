import React from 'react';
import styles from './SmallPrintComponent.module.scss';

const SmallPrintComponent = () => (
  <footer className={styles.footer}>
    <p className={styles.disclaimer}>
      All images are property of ASOS.com. This site is not intended for any commercial purpose.
    </p>
    <p className={styles.name}>
      Made with love, hard work, sweat and tears. Rory Hellier 2021&copy;
    </p>
  </footer>
);

export default SmallPrintComponent;

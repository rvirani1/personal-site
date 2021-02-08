import React from 'react';
import styles from './LogoMark.module.css';

export function LogoMark() {
  return (
    <span className={styles.logoMark}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className={styles.logoSvg}>
        <path
          fill="none"
          d="M15 8l14.729 14.382L15 35.367"
          className={styles.logoSvgPath}
        />
      </svg>
    </span>
  );
}

import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';
import { LogoMark } from './header/LogoMark';
import { LogoCursor } from './header/LogoCursor';
import { EmailIcon } from './header/EmailIcon';
import { PhoneIcon } from './header/PhoneIcon';

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.headerInner}>
        <Link href="/">
          <a className={styles.logo}>
            <LogoMark />

            <span style={{ fontSize: '1.125rem', fontWeight: 700 }}>RiazV.me</span>
            <LogoCursor />
          </a>
        </Link>

        <span className={styles.headerRight}>
          <nav className={styles.menu}>
            <ul className={styles.menuInner}>
              <li className={styles.menuLink}>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li className={styles.menuLink} style={{ marginLeft: 20 }}>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className={styles.menuLink} style={{ marginLeft: 20 }}>
                <Link href="/talks">
                  <a>Talks</a>
                </Link>
              </li>
              <li className={styles.menuLink} style={{ marginLeft: 20 }}>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.headerRight}>
            <a href="tel:+16478557484">
              <PhoneIcon />
            </a>
            <a href="mailto:hi@riazv.me">
              <EmailIcon />
            </a>
          </div>
        </span>
      </span>
    </header>
  );
}

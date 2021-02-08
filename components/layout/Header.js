import React from 'react'
import Link from 'next/link'

import { HeaderRightMobile } from './header/HeaderRightMobile'
import { HeaderRightDeskop } from './header/HeaderRightDesktop'
import styles from './Header.module.css'
import { LogoMark } from './header/LogoMark'
import { LogoCursor } from './header/LogoCursor'

export function Header() {
  // noinspection HtmlUnknownTarget
  return (
    <>
      <header className={styles.header}>
        <span className={styles.headerInner}>
          <Link href="/">
            <a className={styles.logo}>
              <LogoMark />

              <span style={{ fontSize: '1.125rem', fontWeight: 700 }}>RiazV.me</span>
              <LogoCursor />
            </a>
          </Link>
          <HeaderRightDeskop />
        </span>
      </header>
      <HeaderRightMobile />
    </>
  )
}

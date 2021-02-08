import Link from 'next/link'

import { PhoneIcon } from './PhoneIcon'
import { EmailIcon } from './EmailIcon'
import styles from './HeaderRightDesktop.module.css'

export const HeaderRightDeskop = () => (
  <span className={`${styles.headerRight} media-desktop`}>
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
)

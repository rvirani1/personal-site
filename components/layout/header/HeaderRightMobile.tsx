import { useState } from 'react'
import Link from 'next/link'

import styles from './HeaderRightMobile.module.scss'
import { PhoneIcon } from './PhoneIcon'
import { EmailIcon } from './EmailIcon'
import TwitterIcon from '../../icons/TwitterIcon'

export function HeaderRightMobile() {
  const [isOpen, setIsOpen] = useState(false)

  // @ts-ignore
  return (
    <div className="media-mobile">
      <button
        type="button"
        aria-label="Opens the menu bar"
        className={`${styles.toggleButton} ${isOpen ? styles.isOpen : null}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.burger} />
      </button>
      <nav
        className={`${styles.mainNav} ${isOpen ? styles.isOpen : null}`}
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog-search/one">
              <a className={styles.navLink}>Blogs</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/talks">
              <a className={styles.navLink}>Talks</a>
            </Link>
          </li>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
            <a href="tel:\u002b\u0031\u0036\u0034\u0037\u0038\u0035\u0035\u0037\u0034\u0038\u0034'">
              <PhoneIcon height="2.5rem" style={{ marginBottom: '2rem' }} />
            </a>

            <a href="mailto:riaz.n.virani@gmail.com">
              <EmailIcon height="2rem" style={{ marginBottom: '2rem' }} />
            </a>
            <a href="https://twitter.com/ViraniRiaz" style={{ marginLeft: '5px' }}>
              <TwitterIcon size="2.5rem" />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  )
}

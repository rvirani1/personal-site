import { useState } from 'react'
import Link from 'next/link'

import styles from './HeaderRightMobile.module.scss'

export function HeaderRightMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="media-mobile">
      <button
        type="button"
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
            <Link href="/blog">
              <a className={styles.navLink}>Blogs</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/talks">
              <a className={styles.navLink}>Talks</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

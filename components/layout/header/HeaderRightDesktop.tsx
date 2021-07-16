import Link from 'next/link'
import { useRouter } from 'next/router'

import { PhoneIcon } from './PhoneIcon'
import { EmailIcon } from './EmailIcon'
import styles from './HeaderRightDesktop.module.css'
import { HeaderActiveAccent } from './HeaderActiveAccent'

export const HeaderRightDeskop = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <span className={`${styles.headerRight} media-desktop`}>
      <nav className={styles.menu}>
        <ul className={styles.menuInner}>
          <li className={styles.menuLink}>
            <Link href="/">
              <a>
                About
                <HeaderActiveAccent isActive={pathname === '/'} />
              </a>
            </Link>
          </li>
          <li className={styles.menuLink} style={{ marginLeft: 20 }}>
            <Link href="/blog-search/one">
              <a>
                Blog
                <HeaderActiveAccent isActive={pathname.includes('blog')} />
              </a>
            </Link>
          </li>
          <li className={styles.menuLink} style={{ marginLeft: 20 }}>
            <Link href="/talks">
              <a>
                Talks
                <HeaderActiveAccent isActive={pathname.includes('talks')} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <a href="tel:\u002b\u0031\u0036\u0034\u0037\u0038\u0035\u0035\u0037\u0034\u0038\u0034'">
          <PhoneIcon />
        </a>
        <a href="mailto:riaz.n.virani@gmail.com">
          <EmailIcon />
        </a>
      </div>
    </span>
  )
}

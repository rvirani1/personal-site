import { FunctionComponent } from 'react'
import styles from './SearchLayout.module.css'

interface SearchLayoutProps {
  children: React.ReactNode
}

export const SearchLayout: FunctionComponent<SearchLayoutProps> = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className={styles.blogInner}>
      {children}
    </div>
  </div>
)

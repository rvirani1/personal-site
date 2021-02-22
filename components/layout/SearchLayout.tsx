import { FunctionComponent } from 'react'
import styles from './SearchLayout.module.css'

export const SearchLayout: FunctionComponent = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={styles.blogInner}>
        {children}
      </div>
    </div>
  )
}

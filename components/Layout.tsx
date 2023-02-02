import React, { FunctionComponent } from 'react'
import { Header } from './layout/Header'
import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

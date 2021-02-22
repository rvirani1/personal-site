import React, { FunctionComponent } from 'react'
import { Header } from './layout/Header'
import styles from './Layout.module.css'

export const Layout: FunctionComponent = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

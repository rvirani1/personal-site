import React from 'react'
import { Header } from './layout/Header'
import styles from './Layout.module.css'

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}

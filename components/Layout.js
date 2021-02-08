import React from 'react'
import { motion } from 'framer-motion'
import { Header } from './layout/Header'
import styles from './Layout.module.css'

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

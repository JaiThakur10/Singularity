'use client'
import React from 'react'
import styles from './dashboard.module.css'
import Card from '@/components/AdminComponents/Card/card'
import Transactions from '@/components/AdminComponents/transactions/transactions'
import Chart from '@/components/AdminComponents/chart/chart'

const Dashboard =() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}>
        
      </div>
    </div>
  )
}

export default Dashboard;

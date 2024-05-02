'use client'
import styles from './adminNav.module.css'

import { IconNotification, IconScaleOutline } from '@tabler/icons-react'
import { Popsicle, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const  AdminNav =() => {

  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Search />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <IconScaleOutline size={20} />
          <IconNotification size={20} />
          <Popsicle size={20} />
        </div>
      </div>
    </div>
  )
}

export default AdminNav

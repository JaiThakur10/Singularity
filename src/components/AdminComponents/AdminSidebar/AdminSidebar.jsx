import React from 'react'
import styles from './adminSidebar.module.css'
import { BookDashed, HelpCircle, Settings, ShoppingBag, UserCheck2, UserCircle, Workflow } from 'lucide-react';
import { IconFileAnalytics, IconMoneybag } from '@tabler/icons-react';
import MenuLink from '@/components/AdminComponents/AdminSidebar/menuLink/menuLink'
import Image from 'next/image';


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <BookDashed />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <UserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <IconMoneybag />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <Workflow />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <IconFileAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <UserCheck2 />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Settings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];


function AdminSidebar() {
  return (
    <div className={ styles.container}>
      <div className={styles.user}>
        <Image src="/images/logo_2.png" alt="image" width="50" height ="50"/> 
        
        <div className={styles.userDetail}>
          <span className={styles.username}>Singularity</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
        
      </div>
      <ul>
        {menuItems.map((cat) =>(
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink item={item} key ={item.title}/>
            ))}
          </li>
        ))}
        </ul>
      
    </div>
  )
}

export default AdminSidebar

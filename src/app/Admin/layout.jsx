import AdminNav from "../../components/AdminComponents/AdminNav/AdminNav"
import AdminSidebar from "../../components/AdminComponents/AdminSidebar/AdminSidebar"
import "./adminStyles.css";
import styles from '@/app/Admin/Dashboard/dashboard.module.css'

const Layout = ({ children }) => {
    return(
        <div className={styles.container}>
            <div className= { styles.menu}>
                <AdminSidebar/>
            </div>
            <div className={styles.content}>
                <AdminNav/>
                {children}
            </div>
        </div>
    )
}
export default Layout


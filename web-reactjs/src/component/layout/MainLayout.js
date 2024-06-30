import { Outlet, Link } from "react-router-dom";
import styles from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <div>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li li className={styles.menuItem}>
                        <Link to={"/product"}>Product</Link>
                    </li>
                    <li li className={styles.menuItem}>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li li className={styles.menuItem}>
                        <Link to={"/login"}>login</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;
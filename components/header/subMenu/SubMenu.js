
import styles from './SubMenu.module.css'
import Link from "next/link";
function SubMenu() {
    return (
      <div className={styles.subMenu}>
        <div className="container">
          <ul>
            <li>
              <Link href="/products/laptops/asus">asus</Link>
            </li>
            <li>
              <Link href="/products/laptops/apple">apple</Link>
            </li>
            <li>
              <Link href="/products/laptops/lenovo">lenovo</Link>
            </li>
            <li>
              <Link href="/products/laptops/hp">hp</Link>
            </li>
            <li>
              <Link href="/products/laptops/microsoft ">microsoft</Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default SubMenu;
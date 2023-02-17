import Link from "next/link";
import styles from "./menu.module.sass";

export const Menu = ({ children }) => {
  return (
    <div className={styles.menu}>
      <Logo />
      <nav>
        <h6>Components</h6>
        {children}
      </nav>
    </div>
  );
};

export const MenuItem = ({ link, label }) => {
  return (
    <Link className={styles.menuItem} href={link}>
      {label}
    </Link>
  );
};

const Logo = () => {
  return (
    <div className={styles.logo}>
      {/* <img src="/logo.svg" alt="Webforms UI Library" /> */}
      <span>UI Lib</span>
    </div>
  );
};

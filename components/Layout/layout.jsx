import styles from "./layout.module.sass";

export const Wrapper = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

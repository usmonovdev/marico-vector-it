import { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import styles from "./layout.module.css"

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

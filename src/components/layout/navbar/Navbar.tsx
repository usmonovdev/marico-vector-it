import { FC, useState } from "react";
import { Menu, Xmark } from "iconoir-react";
import Components from "@/components";
import mock from "@/mock";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Components.Container>
      <nav className={styles.navbar}>
        <div>
          <Image
            src={"/images/company_logo.svg"}
            width={200}
            height={200}
            alt="logo"
            className={styles.navbar__logo}
          />
        </div>
        <ul className={styles.navbar__linkswrap}>
          {mock.links.map((data: any) => {
            return (
              <li
                key={data.id}
                className="hover:text-primary-500 transition-colors duration-200"
              >
                <Link href={data.link}>{data.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.navbar__user}>
          <Link href={"/login"}>Login</Link>
          <Components.Button>Sign Up</Components.Button>
        </div>
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={styles.navbar__button}
        >
          {sidebarOpen ? (
            <Xmark className="cursor-pointer" />
          ) : (
            <Menu className="cursor-pointer" />
          )}
        </div>
        <Components.Sidebar
          open={sidebarOpen}
          setOpen={() => setSidebarOpen(!setSidebarOpen)}
        />
      </nav>
    </Components.Container>
  );
};

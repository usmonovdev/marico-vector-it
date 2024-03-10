import { FC } from "react";
import styles from "./footer.module.css";
import Components from "@/components";
import Image from "next/image";
import mock from "@/mock";
import Link from "next/link";

interface IFooterProps {}

export const Footer: FC<IFooterProps> = ({}) => {
  return (
    <Components.Container>
      <div className={styles.footer}>
        <div className={styles.footer__brand}>
          <Image
            src={"/images/company_logo.svg"}
            width={400}
            height={400}
            alt="logo"
          />
          <p>info@marico.co</p>
        </div>
        <ul className={styles.footer__links}>
          {mock.links.map((data) => {
            return (
              <li key={data.id}>
                <Link href={data.link}>{data.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Components.Container>
  );
};

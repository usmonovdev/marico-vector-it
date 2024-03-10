import { FC } from "react";
import styles from "./start-now.module.css";
import Components from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

interface IStartProps {}

export const StartNow: FC<IStartProps> = ({}) => {
  return (
    <Components.Container>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={styles.hero__bottom}
      >
        <Image src={'/images/Logo.svg'} width={400} height={400} alt="company_logo"/>
        <h1>Get Started Now</h1>
        <h2>Setup is easy and takes under 5 minutes.</h2>
        <div className={styles.hero__bottom_buttonwrap}>
          <Components.Button>Get Started Now</Components.Button>
          <Components.Button type="outlined">View A Demo</Components.Button>
        </div>
        <div className={styles.hero__bottom_info}>
          <div className={styles.hero__bottom_stat}>
            <span />
            <h6>1000+</h6>
          </div>
          <h5>creators have already started</h5>
        </div>
      </motion.div>
    </Components.Container>
  );
};

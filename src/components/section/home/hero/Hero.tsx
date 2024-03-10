import Components from "@/components";
import { FC } from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";

interface IHeroProps {}

export const Hero: FC<IHeroProps> = () => {
  return (
    <Components.Container>
      <div className={styles.hero}>
        <motion.div
          className={styles.hero__top}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1>
            Own your audience. <br /> <span>So you don't lose them.</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.hero__bottom}
        >
          <h2>Turn your audience into email and text message subscribers.</h2>
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
      </div>
    </Components.Container>
  );
};

import { FC } from "react";
import { motion } from "framer-motion";
import Components from "@/components";
import mock from "@/mock";
import Image from "next/image";
import styles from "./love-marico.module.css";

interface ILoveMaricoProps {}

export const LoveMarico: FC<ILoveMaricoProps> = ({}) => {
  const variant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const variantItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Components.Container>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Why Creators Love Marico
      </motion.h1>
      <motion.ul
        className={styles.list_wrap}
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {mock.loveMarico.map((data) => {
          return (
            <motion.li className={styles.list} variants={variantItem}>
              <div>
                <Image
                  src={data.photo}
                  width={200}
                  height={200}
                  alt={data.title}
                />
                <h1>{data.title}</h1>
              </div>
              <h2>{data.desc}</h2>
            </motion.li>
          );
        })}
      </motion.ul>
    </Components.Container>
  );
};

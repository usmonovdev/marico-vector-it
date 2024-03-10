import { FC } from "react";
import styles from "./section-title.module.css";
import Components from "@/components";
import { motion } from "framer-motion";

interface ITitleProps {
  stepCount: number;
  title: string;
  desc: string;
  showButton?: boolean;
}

export const SectionTitle: FC<ITitleProps> = ({
  stepCount,
  title,
  desc,
  showButton = false,
}) => {
  return (
    <div className={styles.title_wrap}>
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        step {stepCount}
      </motion.h4>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        {title}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {desc}
      </motion.h2>
      {showButton && (
        <Components.Button type="outlined">
          View Avaliable Sources
        </Components.Button>
      )}
    </div>
  );
};

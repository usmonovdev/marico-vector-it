import { FC } from "react";
import styles from "./step-two.module.css";
import Components from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

interface IStepProps {}

export const StepTwo: FC<IStepProps> = ({}) => {
  return (
    <Components.Container>
      <div>
        <Components.SectionTitle
          title="Share Your Homepage"
          desc="Share your Wavium homepage link with your followers, and we'll handle the rest."
          stepCount={2}
        />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className={styles.main}
        >
          <div className={styles.top}>
            <div className={styles.left}>
              <p>One Link</p>
              <h2>
                ALL You Create. <br /> <span>One Link</span>
              </h2>
              <Image
                src={"/images/mobile.png"}
                width={400}
                height={400}
                alt="mobile"
              />
            </div>
            <div className={styles.right}>
              <p>Collect Subscribers</p>
              <div>
                <h1>Emails. Phone #s.</h1>
                <h2>All Yours.</h2>
              </div>
            </div>
          </div>
          <Components.Button>Get Started</Components.Button>
        </motion.div>
      </div>
    </Components.Container>
  );
};

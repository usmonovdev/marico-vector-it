import { FC } from "react";
import styles from "./step-one.module.css";
import Components from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

interface IStepProps {}

export const StepOne: FC<IStepProps> = ({}) => {
  return (
    <Components.Container>
      <div className={styles.one_wrap}>
        <Components.SectionTitle
          title="Connect Your Content"
          desc="Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online."
          showButton={true}
          stepCount={1}
        />
        <div className={styles.one_bottom}>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={styles.left}
          >
            <div>
              <h1>Your Content.</h1>
              <h2>
                All in <span>One Spot</span>
              </h2>
            </div>
            <div className={styles.info}>
              <span>
                <div>1</div>{" "}
                <p>Bring all of your content together into one homepage.</p>
              </span>
              <span>
                <div>2</div>{" "}
                <p>Your page automatically updates whenever you create.</p>
              </span>
            </div>
            <div className={styles.button_group}>
              <Components.Button>Get Started Now</Components.Button>
              <Components.Button type="outlined">View A Demo</Components.Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={styles.right}
          >
            <Image
              src={"/images/step-1.png"}
              width={500}
              height={500}
              alt="step 1"
            />
          </motion.div>
        </div>
      </div>
    </Components.Container>
  );
};

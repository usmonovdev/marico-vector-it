import { FC } from "react";
import styles from "./step-three.module.css";
import Components from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

interface IStepProps {}

export const StepThree: FC<IStepProps> = ({}) => {
  return (
    <Components.Container>
      <div className={styles.one_wrap}>
        <Components.SectionTitle
          title="Send Emails & Text Messages"
          desc="No more going through a social platform. Reach and engage
          your audience directly over email and text massage."
          showButton={false}
          stepCount={3}
        />
        <div className={styles.one_bottom}>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={styles.left}
          >
            <div>
              <h1>Reach Your</h1>
              <h2>
              Audience <span>Directly.</span>
              </h2>
            </div>
            <div className={styles.info}>
              <span>
                <div>1</div>{" "}
                <p>Embed content or create something new to share.</p>
              </span>
              <span>
                <div>2</div>{" "}
                <p>Share content over email, text message or your homepage.</p>
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
              src={"/images/step-3.png"}
              width={500}
              height={500}
              alt="step 3"
            />
          </motion.div>
        </div>
      </div>
    </Components.Container>
  );
};

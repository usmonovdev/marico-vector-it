import { FC, ReactNode } from "react";
import styles from "./button.module.css";

interface IButtonProps {
  type?: "contained" | "outlined";
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  type = "contained",
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${
        type == "contained" ? styles.button__contained : styles.button__outlined
      }`}
    >
      {children}
    </button>
  );
};

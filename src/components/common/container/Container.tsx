import React, { FC } from "react";
import styles from "./container.module.css"

interface ContainerProps {
  children: React.ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
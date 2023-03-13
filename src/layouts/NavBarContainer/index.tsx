import { NavBar } from "@/components/NavBar";
import styles from "@/styles";
import React from "react";

export type NavBarContainerProps = {
  children: React.ReactElement
}

export const NavBarContainer = ({ children }: NavBarContainerProps) => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>{children}</div>
    </div>
  );
};

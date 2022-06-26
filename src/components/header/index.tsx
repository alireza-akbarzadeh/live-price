import React from "react";
import styles from "./index.module.css";

import { Logo } from "@components/logo";

export const Header: React.FC = () => {
  return (
    <div className={styles.header} data-testid="container">
      <Logo />
    </div>
  );
};

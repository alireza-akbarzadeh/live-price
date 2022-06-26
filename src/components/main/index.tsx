import React from "react";
import styles from "./index.module.css";
import Button from "@mui/material/Button";

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>superplate</h1>
      <p>The frontend boilerplate with superpowers!</p>
      <Button variant={"contained"}>Docs</Button>
    </div>
  );
};

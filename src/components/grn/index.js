import React from "react";
import styles from "./index.module.css";
import AddGRN from "./AddGRN";
import GRNViewTable from "./grnViewTable";

const GRN = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.componentDiv}>
          <h2>Add GRN</h2>
          <AddGRN />
          <GRNViewTable />
        </div>
      </div>
    </>
  );
};

export default GRN;

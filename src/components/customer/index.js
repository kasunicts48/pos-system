import React, { useState } from "react";
import styles from "./index.module.css";
import AddCustomer from "./addCustomer";

const Customer = () => {
  return (
    <>
      <div>
        <div className={styles.customerTopDiv}>
          <h2>Add Customer</h2>
          {/* <div className={styles.buttonGroup}>
            <button className={styles.addButton}>Add Customer</button>
          </div> */}
        </div>
        <AddCustomer />
      </div>
    </>
  );
};

export default Customer;

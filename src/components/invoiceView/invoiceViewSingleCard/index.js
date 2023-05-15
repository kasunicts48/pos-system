import React from "react";
import styles from "./index.module.css";

const InvoiceViewSingleCard = ({ invoiceNo, option, customerName, date }) => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.OneDetail}>
          <p>Invoice NO : </p>
          <p>{invoiceNo} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Option</p>
          <p>{option} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Customer Name</p>
          <p>{customerName} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Date</p>
          <p>{date} </p>
        </div>
      </div>
    </>
  );
};

export default InvoiceViewSingleCard;

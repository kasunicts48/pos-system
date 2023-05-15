import React, { useState } from "react";
import styles from "./index.module.css";
import StockViewSingleCard from "./stockViewSingleCard";

const StockView = () => {
  const [product, setProduct] = useState({
    invoiceNo: "",
    option: "",
    from: "",
    to: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Product:", product);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <h2>Invoice View</h2>
        <div className={styles.viewForm}>
          <div className={styles.bottomGrnFormInput}>
            <text>invoiceNo:</text>
            <input
              type="text"
              name="invoiceNo"
              value={product.invoiceNo}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>Option</text>
            <select
              name="option"
              value={product.option}
              onChange={handleChange}
            >
              <option value="">Select Options</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>From:</text>
            <input
              type="text"
              name="from"
              value={product.from}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>To:</text>
            <input
              type="text"
              name="to"
              value={product.to}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Find
            </button>
          </div>
        </div>

        {/* ---------------------------------------------- */}

        <div className={styles.viewTable}>
          <StockViewSingleCard
            invoiceNo={"GRN0001"}
            option={"Local Purchasing"}
            customerName={"JUKI"}
            date={"2023/01/03"}
          />
          <StockViewSingleCard
            invoiceNo={"GRN0001"}
            option={"Local Purchasing"}
            customerName={"JUKI"}
            date={"2023/01/03"}
          />
          <StockViewSingleCard
            invoiceNo={"GRN0001"}
            option={"Local Purchasing"}
            customerName={"JUKI"}
            date={"2023/01/03"}
          />
          <StockViewSingleCard
            invoiceNo={"GRN0001"}
            option={"Local Purchasing"}
            customerName={"JUKI"}
            date={"2023/01/03"}
          />
        </div>
      </div>
    </>
  );
};

export default StockView;

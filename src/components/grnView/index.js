import React, { useState } from "react";
import styles from "./index.module.css";
import GRNViewSingleCard from "./grnViewSingleCard";

const GRNView = () => {
  const [product, setProduct] = useState({
    option: "",
    from: "",
    to: "",
    grnNo: "",
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
        <h2>GRN View</h2>
        <div className={styles.viewForm}>
          <div className={styles.bottomGrnFormInput}>
            <text>GRN No:</text>
            <input
              type="text"
              name="grnNo"
              value={product.grnNo}
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
          <GRNViewSingleCard
            grnNo={"GRN0001"}
            option={"Local Purchasing"}
            supName={"JUKI"}
            date={"2023/01/03"}
          />
          <GRNViewSingleCard
            grnNo={"GRN0001"}
            option={"Local Purchasing"}
            supName={"JUKI"}
            date={"2023/01/03"}
          />
          <GRNViewSingleCard
            grnNo={"GRN0001"}
            option={"Local Purchasing"}
            supName={"JUKI"}
            date={"2023/01/03"}
          />
          <GRNViewSingleCard
            grnNo={"GRN0001"}
            option={"Local Purchasing"}
            supName={"JUKI"}
            date={"2023/01/03"}
          />
        </div>
      </div>
    </>
  );
};

export default GRNView;

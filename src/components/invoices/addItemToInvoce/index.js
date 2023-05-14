import React, { useState } from "react";
import styles from "./index.module.css";
import AddItemTable from "./addItemTable";

const AddItemToInvoice = () => {
  const [product, setProduct] = useState({
    partNo: "",
    code: "",
    description: "",
    quantity: "",
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
        <div className={styles.viewForm}>
          <div className={styles.bottomGrnFormInput}>
            <text>partNo</text>
            <input
              type="text"
              name="partNo"
              value={product.partNo}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>Code:</text>
            <input
              type="text"
              name="code"
              value={product.code}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>description:</text>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>quantity:</text>
            <input
              type="text"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Add Item
            </button>
          </div>
        </div>
        <div className={styles.invoiceTable}>
          <AddItemTable />
        </div>
      </div>
    </>
  );
};

export default AddItemToInvoice;

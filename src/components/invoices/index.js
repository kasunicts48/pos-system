import React, { useState } from "react";
import styles from "./index.module.css";
import InvoiceTable from "./invoiceViewTable";
import { Modal, Text } from "@nextui-org/react";
import AddItemToInvoice from "./addItemToInvoce";

const Invoices = () => {
  const [product, setProduct] = useState({
    option: "",
    customerName: "",
    invoiceNo: "",
    invoiceDate: "",
  });

  const [visible, setVisible] = useState(false);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Product:", product);
  };

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <h2>Invoice</h2>
        <div className={styles.viewForm}>
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
            <text>Customer Name:</text>
            <input
              type="text"
              name="customerName"
              value={product.customerName}
              onChange={handleChange}
            />
          </div>
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
            <text>invoiceDate:</text>
            <input
              type="text"
              name="invoiceDate"
              value={product.invoiceDate}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handler}>
              Search Item
            </button>
          </div>
        </div>

        {/* ************************************* */}
        <div className={styles.invoiceTable}>
          <InvoiceTable />
          <div className={styles.totalDiv}>
            <div className={styles.totalDetails}>
              <p>Discount</p>
              <p>5442.25</p>
            </div>
            <div className={styles.totalDetails}>
              <p>Total</p>
              <p>52464.25</p>
            </div>
          </div>
          <div className={styles.buttonGroup2}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Save
            </button>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Preview
            </button>
          </div>
        </div>
      </div>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        width={1300}
        scroll={true}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={20}>
            Select Item
          </Text>
        </Modal.Header>
        <Modal.Body>
          <AddItemToInvoice />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Invoices;

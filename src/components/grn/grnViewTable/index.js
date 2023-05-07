import React from "react";
import styles from "./index.module.css";
import { Table } from "@nextui-org/react";

const GRNViewTable = () => {
  return (
    <div>
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>No</Table.Column>
          <Table.Column>Code</Table.Column>
          <Table.Column>Description</Table.Column>
          <Table.Column>Qty</Table.Column>
          <Table.Column>Sales Price</Table.Column>
          <Table.Column>Quality</Table.Column>
          <Table.Column>Part No</Table.Column>
          <Table.Column>Supply No</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>01</Table.Cell>
            <Table.Cell>0008</Table.Cell>
            <Table.Cell>This is Description</Table.Cell>
            <Table.Cell>05</Table.Cell>
            <Table.Cell>3456.99</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>P2321</Table.Cell>
            <Table.Cell>S2323</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
          <Table.Cell>01</Table.Cell>
            <Table.Cell>0008</Table.Cell>
            <Table.Cell>This is Description</Table.Cell>
            <Table.Cell>05</Table.Cell>
            <Table.Cell>3456.99</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>P2321</Table.Cell>
            <Table.Cell>S2323</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
          <Table.Cell>01</Table.Cell>
            <Table.Cell>0008</Table.Cell>
            <Table.Cell>This is Description</Table.Cell>
            <Table.Cell>05</Table.Cell>
            <Table.Cell>3456.99</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>P2321</Table.Cell>
            <Table.Cell>S2323</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
          <Table.Cell>01</Table.Cell>
            <Table.Cell>0008</Table.Cell>
            <Table.Cell>This is Description</Table.Cell>
            <Table.Cell>05</Table.Cell>
            <Table.Cell>3456.99</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>P2321</Table.Cell>
            <Table.Cell>S2323</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default GRNViewTable;

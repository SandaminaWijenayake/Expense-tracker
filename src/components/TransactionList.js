import React, { useContext } from "react";
import { GlobleContext } from "../context/GlobleState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobleContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

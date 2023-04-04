import React, { useContext } from "react";
import { GlobleContext } from "../context/GlobleState";

const Transaction = ({ transaction }) => {
  const { transactions, setTransactions } = useContext(GlobleContext);

  const deleteTransaction = (itemId) => {
    const newList = transactions.filter((item) => item.id !== itemId);
    setTransactions(newList);
  };

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;

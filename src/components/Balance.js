import React, { useContext } from "react";
import { GlobleContext } from "../context/GlobleState";

const Balance = () => {
  const { transactions } = useContext(GlobleContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;

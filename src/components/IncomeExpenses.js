import React, { useContext } from "react";
import { GlobleContext } from "../context/GlobleState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobleContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0)
    .toFixed(2);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, curr) => (acc += curr), 0) *
    -(1).toFixed();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

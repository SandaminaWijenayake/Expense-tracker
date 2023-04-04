import React, { useContext } from "react";
import { GlobleContext } from "../context/GlobleState";

const AddTransaction = () => {
  const { setText, setAmount, text, amount, setTransactions, transactions } =
    useContext(GlobleContext);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const addTransactionHandler = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    };
    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };
  // console.log(transactions);
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransactionHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={textChangeHandler}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
export default AddTransaction;

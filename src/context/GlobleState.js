import React, { createContext, useState } from "react";

export const GlobleContext = createContext();

const GlobeStateProvider = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([
    // { id: 1, text: "flower", amount: -20 },
    // { id: 2, text: "salary", amount: 300 },
    // { id: 3, text: "book", amount: -10 },
    // { id: 4, text: "camara", amount: 150 },
  ]);

  return (
    <GlobleContext.Provider
      value={{
        text,
        setText,
        amount,
        setAmount,
        transactions,
        setTransactions,
      }}
    >
      {props.children}
    </GlobleContext.Provider>
  );
};

export default GlobeStateProvider;

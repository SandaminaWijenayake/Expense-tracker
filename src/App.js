import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import GlobeStateProvider, { GlobleContext } from "./context/GlobleState";

function App() {
  // const [text, setText] = useState("");
  // const [amount, setAmount] = useState(0);
  return (
    <GlobeStateProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobeStateProvider>
  );
}

export default App;

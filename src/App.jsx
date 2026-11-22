
import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  const billAmount = Number(bill) || 0;
  const tipAmount = (billAmount * tip) / 100;
  const total = billAmount + tipAmount;
  const perPerson = people > 0 ? total / people : 0;

  return (
    <div className="app">
      <div className="calculator">
        <h1>Tip Calculator</h1>
        <p className="subtitle">Calculate your bill easily!</p>

        <label>Bill Amount (₹)</label>
        <input
          type="number"
          min="0"
          placeholder="Enter bill amount"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />

        <label>Select Tip</label>
        <div className="tip-options">
          {[5, 10, 15, 20].map((value) => (
            <button
              key={value}
              className={tip === value ? "active" : ""}
              onClick={() => setTip(value)}
            >
              {value}%
            </button>
          ))}
        </div>

        <label>Number of People</label>
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
        />

        <div className="results">
          <div>
            <span>Tip Amount</span>
            <strong>₹{tipAmount.toFixed(2)}</strong>
          </div>
          <div>
            <span>Total Amount</span>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
          <div className="final-result">
            <span>Per Person</span>
            <strong>₹{perPerson.toFixed(2)}</strong>
          </div>
        </div>

        <button
          className="reset"
          onClick={() => {
            setBill("");
            setTip(10);
            setPeople(1);
          }}
        >
          Reset Calculator
        </button>
      </div>
    </div>
  );
}

export default App;

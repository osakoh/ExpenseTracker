import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "Gym Membership",
    amount: 24.12,
    date: new Date(2019, 8, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e4",
    title: "Uplift Desk",
    amount: 199.3,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e5",
    title: "Laptop and Monitor",
    amount: 899.49,
    date: new Date(2020, 20, 12),
  },
  {
    id: "e6",
    title: "Council tax",
    amount: 250.49,
    date: new Date(2021, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  // addExpenseHandler function; expenseData is the new data from the expenseform
  const addExpenseHandler = (expenseData) => {
    // add to array the first item in the array, then add other existing expenses
    // updating a state based on an older version of the same state
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div className='App'>
      {/* passing a prop named onToggleForm to NewExpense */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

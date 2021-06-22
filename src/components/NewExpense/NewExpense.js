import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // toggle form; formDisplay is false by default
  const [formDisplay, setFormDisplay] = useState(false);

  // saveExpenseDataHandler: sends formdata to App js
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // prop(onAddExpense) from App.js
    props.onAddExpense(expenseData);
  };

  // onToggleForm function
  const toggleForm = () => {
    setFormDisplay(!formDisplay);
  };

  return (
    <div className='new-expense'>
      {/* show button if form display is false */}
      {!formDisplay && (
        <button type='button' onClick={toggleForm}>
          Add New Expense
        </button>
      )}
      {/* show button if form display is false */}
      {/* show ExpenseForm if form display is true */}
      {formDisplay && (
        <ExpenseForm
          // passing prop down to ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onToggleForm={toggleForm}
        />
      )}{" "}
      {/* show ExpenseForm if form display is true */}
    </div>
  );
};

export default NewExpense;

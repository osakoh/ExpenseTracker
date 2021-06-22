import React, { useState } from "react";
import "./ExpenseForm.css";

// receiving props(onSaveExpenseData) from NewExpense
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  // title handler
  const titleChangeHandler = (e) => {
    //    [e.target.name]: e.target.value
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    // used when the state update depends on the previous state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  // amount handler
  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });

    setEnteredAmount(e.target.value);
  };

  // date handler
  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });

    setEnteredDate(e.target.value);
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault(); // prevent page refresh

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // prop(onSaveExpenseData) from NewExpense component
    props.onSaveExpenseData(expenseData);
    // reset state:clear input fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    // toggleForm
    props.onToggleForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            value={enteredTitle}
            type='text'
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={enteredAmount}
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={enteredDate}
            type='date'
            min='2019-01-20'
            max='2022-12-15'
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={props.onToggleForm}>
          Cancel
        </button>{" "}
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

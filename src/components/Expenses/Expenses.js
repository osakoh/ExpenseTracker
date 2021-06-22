import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// receiving props(items) from App.js
const Expenses = (props) => {
  // update state
  const [filteredYear, setfilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  /**
   * filter array based on selected year: type of expense date in array is date object while
   * selected/filtered year is of type string.
   * first get the year from the date object, convert into string the compare as below
   */
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* rendering list: passing items props to ExpensesList */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

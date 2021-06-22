import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// receiving props(title, amount, date) from Expenses
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} month={props.month} year={props.year} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

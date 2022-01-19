import React from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

//props is ONE parameter
const ExpenseItem = (props) => {


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
    </Card>
  ); //on button tag, we point at clickHandler, but we don't call it (with parenthesis), cause if we do that, it would be called during the parse of ExpenseItem.js only
};

export default ExpenseItem;

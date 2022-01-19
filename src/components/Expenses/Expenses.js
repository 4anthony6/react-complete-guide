import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Filters/ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2021");

  const filterChangedHandler = (selectedYear) => {
    setfilteredYear(selectedYear); //register the value lifted up by ExpensesFilter.js
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} //pushing down the state value to Expenses Filter
          onChangeFilter={filterChangedHandler}
        />
        {filteredExpenses.length === 0 && <p>No Expense found .</p> /* we abuse some JS trick, that allows us to return what is after the "&&"*/} 
        {filteredExpenses.length === 0 ? (
          <p>No Expense found !</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id} // special prop that tells React how to identify each items
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};
export default Expenses;

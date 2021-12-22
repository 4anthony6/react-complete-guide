import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Filters/ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  
  const [filteredYear, setfilteredYear] = useState("2021");

  const filterChangedHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  }
  return (
      <Card className="expenses">
        <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangedHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          filter={filteredYear}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          filter={filteredYear}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          filter={filteredYear}
        />
      </Card>
  );
}
export default Expenses;

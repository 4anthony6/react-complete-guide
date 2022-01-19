import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Expense1",
      amount: 297.2,
      date: new Date(2021, 2, 23),
    },

    {
      id: "e2",
      title: "Expense2",
      amount: 23.2,
      date: new Date(2021, 4, 16),
    },
    {
      id: "e3",
      title: "Expense3",
      amount: 543.2,
      date: new Date(2021, 6, 9),
    },
    {
      id: "e4",
      title: "Expense4",
      amount: 53.2,
      date: new Date(2020, 6, 9),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newSubmittedExpense) => {
    console.log("in App.js");
    console.log();
    setExpenses(
      ((prevExpenses) => { // to update the state with the latest snapshot of the state, it's a best practice to use a lambda function like this, and put previous State as parameter
        return [newSubmittedExpense, ...prevExpenses];
      })
    );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

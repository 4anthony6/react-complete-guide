import React, { useState } from "react"; // React Library which is automatically added with JSX (create-react-app allows that)
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [panelDeployed, setPanelDeployed] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //console.log(expenseData);
  };

  const showPanelHandler = () => {
    console.log("state before update " + panelDeployed);
    setPanelDeployed((prevState) => {
      return !prevState; //always from false to true in our case, as button is hidden just after click
    });
  };
  const hidePanelHandler = () => {
    setPanelDeployed(false);
  };

  return (
    <div className="new-expense">
      {panelDeployed && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          panelState={panelDeployed}
          onHidePanel={hidePanelHandler}
        />
      )}
      {!panelDeployed && (
        <button onClick={showPanelHandler}>Add New Expense</button>
      )}
    </div>
  );
  //what is between {} is not a function passed to the event, but a pointer to this function
};

export default NewExpense;

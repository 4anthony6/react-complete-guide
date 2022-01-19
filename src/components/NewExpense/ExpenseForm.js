import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //using event and STATE to "save" the value entered
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /* 
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //  ...userInput, // copy the object userInput (javascript function)
    //  enteredTitle: event.target.value
    //});

    //this form of update uses an approach that guarantee to update with the latest snapchot of the state
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value } //new state
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput, // copy the object userInput (javascript function)
      enteredAmount: event.target.value
    });
  };
  
  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput, // copy the object userInput (javascript function)
      enteredDate: event.target.value,
    });
  };

  // IF the state update DEPENDS on the PREVIOUS state, then we should pass a function to the handler,
  // to ensure that the parameter is the good previous state.
  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...userInput, // copy the object userInput (javascript function)
        enteredDate: event.target.value,
      };
    });
  };
*/

  const submitHandler = (event) => {
    event.preventDefault(); // stops the default reload of the webpage after submit

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);//when form is submitted, we use value contained in states to "save" information on expenseData
    props.onSaveExpenseData(expenseData); //event of newExpense
    props.onHidePanel();

    setEnteredTitle(""); // Sets back to an empty string after submission
    setEnteredAmount("");
    setEnteredDate("");
  };
  console.log(props.panelState);
  if (props.panelState) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount} //changes the value after submission
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-31-12"
              max="2030-31-12"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="cancel">Cancel</button>
          </div>

          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
  } else {
    return <form onSubmit={submitHandler}></form>;
  }
};

export default ExpenseForm;

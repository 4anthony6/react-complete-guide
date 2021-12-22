import React from 'react'; // React Library which is automatically added with JSX (create-react-app allows that)
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';


const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
        //console.log(expenseData);
    }

    //what is between {} is not a function passed to the event, but a pointer to this function
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;

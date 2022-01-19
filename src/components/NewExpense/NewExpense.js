import React, {useState} from 'react'; // React Library which is automatically added with JSX (create-react-app allows that)
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';


const NewExpense = (props) =>{

    const [panelDeployed,setPanelDeployed] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
        //console.log(expenseData);
    }

    const clickHandler = () => {
        console.log('state before update '+ panelDeployed );
        setPanelDeployed( (prevState) =>{
            return !prevState;
        });
    }
    const hidePanelHandler = () => {
        setPanelDeployed( (prevState) =>{
            return false;
        });
    }

    if (panelDeployed){
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} panelState = {panelDeployed} onHidePanel = {hidePanelHandler}/>
            </div>
        );
    }else {
        return (
            <div className="new-expense">
                <button onClick = {clickHandler}>Add New Expense</button>
            </div>
        );
    }
    //what is between {} is not a function passed to the event, but a pointer to this function
    
};

export default NewExpense;

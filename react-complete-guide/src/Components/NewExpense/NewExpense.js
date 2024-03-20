// new Expense where Users can enter data
import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandeler = (enteredExpenseDate)=>{

        // enteredExpenseDate is the value provided by ExpenseForm component just linke expenseData array in ExpenseForm
        const expenseData ={
            ...enteredExpenseDate,
            id: Math.random().toString(),
        } 

        props.onAddExpense(expenseData);
        console.log('expenses inside the NewExpense.js= ', expenseData)
    }


    return (
        <div className="new-expense">
            {/* value for this prop should be a function, a fucntion which will only be triggered when something happens inside of ExpenseForm Component */}
<ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} />
        </div>
    );
}

export default NewExpense;
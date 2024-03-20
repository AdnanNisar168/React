import React, { useState } from "react"


import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // 2 way Binding
    // Advantage of using state is to implement 2 way data binding
    // it means that we can listen the inputs and also can patch it to the input values

    //useState
    const [enteredTite, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // if you want to handle all state in the object of one useState having the stateObject and stateValues as the properties and values 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    
    const titleChangeHandler = (event)=>{
        console.log("Title changed")
        console.log(event.target.value)
        setEnteredTitle(event.target.value)

        // if we only change one propr
        // setUserInput({
        //     enteredTitle: event.target.value
        // })

        // in the following state handling our one state is dependent 
        //on previous state so we will not do this
        // we will use Alternative Approach 

        // setUserInput({
        //     // first we will copy old array using spredOperator ... and 
        //     // then over right the desired value
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // Alternative Approach
        // this state form is used when our one state depends on prvious state
        // in this approach react assures that we allways get 
        // latest previous state snapShot not outDated SnapShots 
        // setUserInput((prevState) =>{
        //     return { ...prevState,enteredTitle: event.target.value }
        // })
    }

    const amountChangeHandler = event =>{
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     // first we will copy old array using spredOperator ... and 
        //     // then over right the desired value
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value);

        // setUserInput({
        //     // first we will copy old array using spredOperator ... and 
        //     // then over right the desired value
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event)=>{
        // because when i click on Add Expense button its default dehaviour sends the request to submit the form and reload the page , we don't want to reload the page
        event.preventDefault();

        const expenseData = {
            title: enteredTite,
            amuont: enteredAmount,
            date: new Date(enteredDate),
        }

        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        // empty the form value after submittion
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    return <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text"
                 value={enteredTite}
                 name=""
                 id=""
                 onChange={titleChangeHandler}
                 />
            </div>
        </div>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number"
                value={enteredAmount}
                name=""
                id=""
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}/>
            </div>
        </div>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date"
                value={enteredDate}
                name=""
                id=""
                min="2019-01-01" max="2025-01-01" step="0.01"
                onChange={dateChangeHandler}/>
            </div>
        </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
         </form>
}



export default ExpenseForm

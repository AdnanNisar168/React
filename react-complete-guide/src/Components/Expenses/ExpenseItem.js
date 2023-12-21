import React, {useState} from 'react';


import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

// importing css 
import './ExpenseItem.css';


function ExpenseItem(props) {
    // javaScript code

    //UseState
    //store default state value
    //useState(props.title);

    //Use State
    //it always state 2 values 1st one current state value store in variable 
    //and 2nd is Functuion to update current state value

    //array destructuring
    const [title, setTitle] = useState(props.title);

    const expenseDate = new Date(2023, 8, 3);
    const expenseTile = 'Car Insurance';
    const expenseAmount = 294.67;
    //let title = props.title
    const clickHandler = ()=>{
        //title = 'Updated'
        console.log(title);
    }
    
    return (
        // <div className="expense-item">
        // <div>{ expenseDate.toISOString() }</div>
        // <div className="expense-item__description">
        //     <h2>{ expenseTile }</h2>
        //     <div className="item__price">${ expenseAmount }</div>
        // </div>
        // </div>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            
        <div className="expense-item__description">
            <h2>{ title }</h2>
            <div className="expense-item__price">
                ${ props.amount }
            </div>
        </div>
        {/* <button onClick = {()=>{console.log('clicked!')}}>Change Title</button> */}
        <button onClick ={clickHandler} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem; 
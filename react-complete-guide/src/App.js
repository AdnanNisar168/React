// import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
// is used in old react apps
import React from 'react';

const App = ()=> {

  const expenses = [
    {
      title: 'Toilet Paper',
      amount: '94.27',
      date: new Date(2023, 7, 3)
    },
    {
      title: 'New TV',
      amount: '794.67',
      date: new Date(2023, 8, 1)
    },
    {
      title: 'Car Insurance',
      amount: '294.67',
      date: new Date(2023, 8, 3)
    },
    {
      title: 'New Desk ( wooden )',
      amount: '50',
      date: new Date(2023, 4, 5)
    },
  ];

  // without jsx
          
  // return React.createElement(
  //   'div',
  //    {},                //name of tag, attribute, value
  //     React.createElement('h2', {}, "Let's Get Started"),
  //     React.createElement(Expenses, {items: expenses})
  //     );
  // without jsx


  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      
      <Expenses items={expenses} />


    </div>
  );
}

export default App;

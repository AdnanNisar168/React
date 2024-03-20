import React from 'react';


import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;

// in props.children children is the special keyword whic value is the content 
// between the opening and closing tag of the wrapper component in my case "Card"
// component in the Expenseitem.js is used as a wrapper component,

// Component composition is the name for passing components as props to other components, 
// thus creating new components with other components.
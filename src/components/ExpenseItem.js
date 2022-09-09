import React from 'react';
import './css/ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.item.date} />
            </div>
            <div className="expense-item__description">
                <h2>{props.item.title}</h2>
                <div className="expense-item__price">${props.item.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
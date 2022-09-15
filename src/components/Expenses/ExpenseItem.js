import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                <div>
                    <ExpenseDate date={props.item.date} />
                </div>
                <div className="expense-item__description">
                    <h2>{props.item.title}</h2>
                    <div className="expense-item__price">${props.item.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
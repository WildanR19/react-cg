import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found.</h2>
    }
    return (
        <ul className="expenses-list">
            {
                props.items.map((d) => <ExpenseItem item={d} key={d.id}></ExpenseItem>)
            }
        </ul>
    );
};

export default ExpensesList;
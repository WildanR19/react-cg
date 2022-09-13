import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.item.title)

    const clickHandler = () => {
        setTitle('Updated')
        // return console.log("clicked!!")
    }
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.item.date} />
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.item.amount}</div>
                <button onClick={clickHandler}>Click</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
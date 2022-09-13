import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const [filter, setFilter] = useState(2021)
    const filterSelectedHandler = (selectedFilter) => {
        console.log(selectedFilter)
        setFilter(selectedFilter)
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onSelectfilter={filterSelectedHandler} selected={filter} />
            {
                props.data.map((d, index) => {
                    return (
                        <ExpenseItem item={d} key={index}></ExpenseItem>
                    )
                })
            }
        </Card>
    );
}

export default Expenses;
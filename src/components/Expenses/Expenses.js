import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filter, setFilter] = useState('2021')
    const filterSelectedHandler = (selectedFilter) => {
        setFilter(selectedFilter)
    }

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === filter
    })

    return (
        <Card className="expenses">
            <ExpenseFilter onSelectfilter={filterSelectedHandler} selected={filter} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;
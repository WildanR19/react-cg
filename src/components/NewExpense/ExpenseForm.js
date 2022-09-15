import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [showForm, setShowForm] = useState(false)

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let formData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }

        props.onSaveFormData(formData)

        setTitle('')
        setAmount('')
        setDate('')
        setShowForm(!showForm)
    }

    const clickHandler = () => {
        setShowForm(!showForm)
    }

    return (
        <div>
            {!showForm && <div>
                <div className="new_expense__actions">
                    <button onClick={clickHandler}>Add Expense</button>
                </div>
            </div>}
            {showForm && <div>
                <form onSubmit={submitHandler}>
                    <div className="new_expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input value={title} type="text" onChange={titleChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input value={amount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input value={date} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                        </div>
                    </div>
                    <div className="new_expense__actions">
                        <button onClick={clickHandler}>Cancel</button>
                    </div>
                    <div className="new_expense__actions">
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            </div>}
        </div>
    );
};

export default ExpenseForm;
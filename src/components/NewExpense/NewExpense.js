import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const saveFormDataHandler = (enteredFormData) => {
        const formData = {
            ...enteredFormData,
            id: Math.random().toString()
        }

        props.onAddExpense(formData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveFormData={saveFormDataHandler} />
        </div>
    );
};

export default NewExpense;
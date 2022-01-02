import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const toggleForm = () => {
        setShowForm((prevState) => {
            return !prevState
        })
    }

    if (showForm) {
        return (
            <div className='new-expense'>
                <ExpenseForm onCancel={toggleForm} onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        )
    }
    return (
        <div className='new-expense'>
            <button onClick={toggleForm}>Add Expense</button>
        </div>)
}

export default NewExpense
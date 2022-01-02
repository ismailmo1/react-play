import { useState } from 'react';
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
function Expenses(props) {
    const [year, setYear] = useState('2021');

    const yearFilterHandler = (year) => {
        setYear(year);
    }
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    })


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={year} onYearChange={yearFilterHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;

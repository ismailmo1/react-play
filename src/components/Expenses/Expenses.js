import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount.toFixed(2)} />
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount.toFixed(2)} />
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount.toFixed(2)} />
            <ExpenseItem title={props.expenses[3].title} date={props.expenses[3].date} amount={props.expenses[3].amount.toFixed(2)} />
        </Card>
    )
}

export default Expenses;

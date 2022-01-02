import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [{
  id: 'a1',
  title: 'Car Insurance',
  amount: 249.67,
  date: new Date(2021, 5, 2)
},
{
  id: 'a2',
  title: 'Coffee',
  amount: 5.2,
  date: new Date(2020, 8, 11)
}, {
  id: 'a3',
  title: 'Ibuprofen',
  amount: 1.40,
  date: new Date(2021, 1, 24)
}, {
  id: 'a4',
  title: 'Gym Membership',
  amount: 19.99,
  date: new Date(2019, 1, 1)
}]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div >
  );
}

export default App;

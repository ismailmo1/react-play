import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [{
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div >
  );
}

export default App;

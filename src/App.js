import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
 const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "Expense1",
      amount: 297.2,
      date: new Date(2021, 2, 23),
    },

    {
      id: "e2",
      title: "Expense2",
      amount: 23.2,
      date: new Date(2021, 4, 16),
    },
    {
      id: "e3",
      title: "Expense3",
      amount: 543.2,
      date: new Date(2021, 6, 9),
    },
  ];

    const addExpenseHandler = (newSubmittedExpense) => {
      console.log("in App.js");
      console.log(expenses);
    }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}  />
    </div>
  );
}

export default App;

// import ExpenseItem from "./components/ExpenseItem";

//set of Expenses Items
import Expenses from "./components/Expense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  /**
   * @param {arrOfExpenses} is the property that will contain all data of expenses variable, it can also be a JSON
   */
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem> */}
      <Expenses 
        arrOfExpenses={expenses}
      />
    </div>
  );
}


export default App;

// Card of  an Expense Item
import ExpenseItem from "./ExpenseItem";

//Styles for the card that stores expense items
import './Expenses.css';

function Expenses(props) {
    // console.log(props.arrOfExpenses[0])
    /**
     * @array of @objects full of data
     */
    let expenses = props.arrOfExpenses; //=> [{}, {}, ...]

    /**
     * @array of Item Expenses components, it adds every component to the queue, from first to last one 
     */
    let arr = []
    expenses.forEach( data => {
        arr.push(
            <ExpenseItem
                title= {data.title}
                date = {data.date}
                amount = {data.amount}
            />
        )
    });
    return (
        <div className="expenses">

            
            {/* <ExpenseItem 
                title= {props.arrOfExpenses[0].title}
                amount= {props.arrOfExpenses[0].amount}    
                date= {props.arrOfExpenses[0].date}
            />  */}
            {arr}
        </div>
    )
    
}

//requires to import itself with the same name as the explicit one on export statement
export default Expenses;
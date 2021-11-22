// Card of  an Expense Item
import ExpenseItem from "./ExpenseItem";

//Styles for the card that stores expense items
import './Expenses.css';

/**
 * {Card} is a special component to wrap around all my Expenses Items, it has special styling defined on its JS
 * It will be used on the return value of our React component "Expenses" as a wrapper
 */
import Card from "./Card";


/**
 * 
 * @param {object} props  is an object with an attribute named "arrOfExpense" which contains an array of data 
 * @returns a React component full of child components
 */
function Expenses(props) {
    // console.log(props.arrOfExpenses[0])
    /**
     * @array of @objects full of data
     */
    let expenses = props.arrOfExpenses; //=> [{}, {}, ...]

    /**
     * @array of Item Expenses components, it adds every component to the queue, from first element to the last one 
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

    /**
     * has only one @root div in order to render same level components, always using a father-like component 
     */
    return (
        <Card className="expenses">

            
            {/* <ExpenseItem 
                title= {props.arrOfExpenses[0].title}
                amount= {props.arrOfExpenses[0].amount}    
                date= {props.arrOfExpenses[0].date}
            />  */}
            {arr}
        </Card>
    )
    
}

//requires to import itself with the same name as the explicit one on export statement
export default Expenses;
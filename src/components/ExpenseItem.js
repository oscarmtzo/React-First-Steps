//importation of css styles within the same file directory
import "./ExpenseItem.css";
/**
 * expenseDate is a component for displaying date within an couple of div´s tags, to reduce the amount of logic
 */
import ExpenseDate from './ExpenseDate'

/**
 * 
 * @param props is the data passed from the expenses variable from ./../App.js 
 */
function ExpenseItem(props) {
    
    return (
        <div className="expense-item">

            <ExpenseDate date={props.date}/>
            
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </div>
    );
}

//Creating a component with React,
//it lives in the creation of  a function
// should only have 1 root element
export default ExpenseItem;

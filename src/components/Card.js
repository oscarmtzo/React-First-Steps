/**
 * @import styles for the card
 */
import './Card.css';


/**
 * 
 * @param {object} props.children is reserved name, and will be always the content between the opening tags of our custom component, an object that every component receives
 * @returns 
 */
function Card (props) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;
import React,{useState} from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const [buttonState,buttonStatePresent] = useState(false);
    const newExpenseDataHandler = expense => {
      const  newExpenseData = {
          ...expense,
          id : Math.random().toLocaleString
      }
      props.onAddNewExpense(newExpenseData)
    }

    const formStateHandler = (event)=>{
       buttonStatePresent(true);
    }
    const buttonStateHandler =()=>{
        buttonStatePresent(false);
    }

    let displayContent = <button onClick={formStateHandler}>Add New Expense</button>
    if(buttonState)
     displayContent = <ExpenseForm onAddExpense={newExpenseDataHandler} onCancel ={buttonStateHandler}></ExpenseForm>
    return(
        <div className='new-expense'>
            {displayContent}
        </div>
    );
}

export default NewExpense;
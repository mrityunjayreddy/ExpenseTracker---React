import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
function ExpenseList(props){
    if(props.filteredExpense.length>0){
      return <ul className='expenses-list'>
          {props.filteredExpense.map(expense =>
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}></ExpenseItem>)}
      </ul> 
    }
    else 
    return <p className='expenses-list__fallback'>No Items to show</p>
}

export default ExpenseList;
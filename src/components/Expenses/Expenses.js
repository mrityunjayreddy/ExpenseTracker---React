import React,{useState} from 'react';
import ExpenseList from "./ExpenseList";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
function Expenses(props){
    const [currentFilter,setCurrentFilter] = useState('2022');
    
    const currentFilterHandler =(selectedYear)=>{
        setCurrentFilter(selectedYear);
    }

    const filteredExpense = props.data.filter(expense=>{
        return expense.date.getFullYear().toString() === currentFilter;
    })
   
    

    return (
        <div>
        <Card className = 'expenses'>
            <ExpensesChart expenses ={filteredExpense}></ExpensesChart>
        <ExpensesFilter selectedYear={currentFilter}onChangeFilter={currentFilterHandler}></ExpensesFilter>
        <ExpenseList filteredExpense = {filteredExpense}></ExpenseList>
        </Card>
        </div>
    );
    
}
export default Expenses;
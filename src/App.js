import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DummyExpenseData =[
  {id:'e1',title:'Car Insurance', date: new Date(2020, 7, 14), amount:254.0},
  {id:'e2',title:'Toilet Paper', date: new Date(2020, 8, 14), amount:34.0},
  {id:'e3',title:'Movie', date: new Date(2020, 9, 14), amount:110.0},
  {id:'e4',title:'Phone Bill', date: new Date(2020, 5, 14), amount:54.0}
]
function App() {
  const [ExpenseData,setExpenseData] = useState(DummyExpenseData);

  const newExpenseDataHandler = expense =>{
      setExpenseData(prevExpense=>{
        return [expense,...prevExpense];
      })
  }
  return (
    <div>
      <NewExpense onAddNewExpense={newExpenseDataHandler}></NewExpense>
     <Expenses data = {ExpenseData}></Expenses>
    </div>
  );
}

export default App;

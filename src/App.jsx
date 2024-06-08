import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import ExpenseTotal from '../ExpenseTotal'

function App() {
  const [expenses , setExpenses] = useState([])
  const [totalExpense , setTotalExpense] = useState(0)
  const expense = (item) => {
     setExpenses([...expenses , item])
     console.log(expenses);
  }
  useEffect(()=>{
   const total = expenses.reduce((accumulator,expense)=>accumulator + expense.amount , 0)
   setTotalExpense(total)
  },[expenses])

  const deleteExpense = (i) => {
      setExpenses(expenses.filter((expense)=>
          expense.id != i 
      ))
  }
  return (
    <>
     
     <h2 style={{fontFamily:'cursive',color:'tomato'}}>Expense tracker</h2>
     <ExpenseTotal TotalExpense={totalExpense}/>
     <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
     <ExpenseForm  expense={expense}/>
    </>
  )
}

export default App

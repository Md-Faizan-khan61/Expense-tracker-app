import React from "react";

const ExpenseList = ({expenses, deleteExpense}) => {
   return(
    <>
    <h3>History</h3>
    <hr/>
{expenses.map((expense,index)=>
<div key={index} className="list">
    <h3>{expense.item}</h3>
    <span>Rs .{expense.amount}&nbsp; <span><i className="fa-solid fa-trash-can" onClick={()=>deleteExpense(expense.id)} style={{color:'gray'}}></i></span></span>
    
</div> 
)} 
</>
   )
}

export default ExpenseList
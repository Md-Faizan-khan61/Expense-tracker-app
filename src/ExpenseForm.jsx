import React, { useState } from "react";

const ExpenseForm = ({expense}) => {
    const [item , setItem] = useState('')
    const [amount , setAmount] = useState('')
    const [id , setId] = useState(0)
    const handleSubmit = (e) => {
          e.preventDefault()
          setId(id+1)
          expense({id,item,amount:parseFloat(amount)})
          
          setItem('')
          setAmount('')
    }
      return(
         <>
        <div className="main">
        <h3 style={{color:'rosybrown'}}>Add new expense</h3><hr/>
         <form className="form" onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="your item"
          value={item}
          onChange={(e)=>setItem(e.target.value)}
          className="text"
          required
          />
          <input
          type="text"
          placeholder="your amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          required
          className="text"
          />
          <button style={{color:'royalblue',background:'whitesmoke'}}>Add Expenses</button>
         </form>
        </div>
         </>
      )
}

export default ExpenseForm
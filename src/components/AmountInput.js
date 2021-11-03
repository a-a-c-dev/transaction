import React from 'react';

export const AmountInput =React.memo(({amount, validAmount, amountRequired, handleChange})=>{
    return(
        <div>
            <label htmlFor="amount">סכום</label>
            <br />
            <input  type="number"  name="amount" value={amount}  onChange={handleChange}  placeholder="הכנס סכום עסקה..."/>
            {amountRequired?(<p className="error">{amountRequired}</p>):validAmount?(<p className="error">{validAmount}</p>):null }
        </div>

    )

})
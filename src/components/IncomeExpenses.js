import React, {useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    // Calculate the amount
    const defaultCurrency='₪'
    const dollarSign='$'
    const dollarRate = 3.325; 
    const euroRate = 3.78
    const amounts = transactions.map(transaction=> transaction.currency===defaultCurrency?
                                        transaction.amount
                                        :transaction.currency===dollarSign?
                                        transaction.amount*dollarRate
                                        :transaction.amount*euroRate
                                        );
    //Calculate the income 
        const income = amounts
        .filter(item => item > 0)
        .reduce((acc,item)=>{
            return(acc+=item)},0)
        .toFixed(2);
    //Calculate the expense
    const expense = (
        amounts
        .filter(item=>item<0)
        .reduce((acc,item)=>(acc+=item),0)
        *-1
        ).toFixed(2);
    
    return(
        <div className="inc-exp-container">
            <div>
                <h4>הכנסה</h4>
                <p  className="money plus">{
                     `${defaultCurrency} ${income}`
                }</p>
            </div>
            <div>
                <h4>הוצאה</h4>
                <p  className="money minus">
                  {
                  `${defaultCurrency} ${expense}`
                  }
                </p>
            </div>
        </div>
    )
}
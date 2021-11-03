import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance =React.memo(() => {
    const {currency, transactions } = useContext(GlobalContext)
    const defaultCurrency='₪'
    const dollarSign='$'
    const dollarRate = 3.24; 
    const euroRate = 3.78
    const amounts = transactions.map(transaction=> transaction.currency===defaultCurrency?
                                        transaction.amount
                                        :transaction.currency===dollarSign?
                                        transaction.amount*dollarRate
                                        :transaction.amount*euroRate
                                        );
    const total = currency===defaultCurrency? amounts.reduce((acc,val)=>(acc+=val),0).toFixed(2)
                                            :currency===dollarSign?(amounts.reduce((acc,val)=>(acc+=val),0)/3.245).toFixed(2):
                                             (amounts.reduce((acc,val)=>(acc+=val),0)/3.7830).toFixed(2);
    
    return(
        <>
            <h3 >המאזן שלך</h3>
            <h1 className={total<0?'minus':'plus'}>{total<0?`${total} ${currency}`:`${currency} ${total}`}</h1>
        </>
    )
})
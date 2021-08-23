import React,{ createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


const initialState = {
    
    currency:'$',
    transactions:[
        {id:1, text:'פרחים', amount:-20,currency:'₪'},
        {id:2, text:'משכורת', amount:300, currency:'$'} ,
        {id:3, text:'שוקולד', amount:-20 , currency:'₪'},
        {id:4, text:'מצלמה', amount:-120 , currency:'$'} 
    ]
}


// Create context
export const GlobalContext = createContext(initialState);



// Provider Components

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }


    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    
    function changeCurrency(currency) {
        dispatch({
            type:'CHANGE_CURRENCY',
            payload:currency
        });
    }
    return(<GlobalContext.Provider value={{
                transactions:state.transactions,
                currency:state.currency,
                deleteTransaction,
                addTransaction,
                changeCurrency
            }}>
                {children}
            </GlobalContext.Provider>);
}
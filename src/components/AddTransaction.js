import React,{useState,useContext,useCallback} from 'react';
import {TextInput} from './TextInput';
import {AmountInput} from './AmountInput';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction =React.memo(() => {

    const [text,setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [errors, setErrors] = useState({
    });

    const { addTransaction,currency } = useContext(GlobalContext);

        
    const fieldIsValid = useCallback( () => {
        const errors = {};
        const textPattern = /^[\u0591-\u05F4\s]+$/gi
        if (!text) errors.textRequired = "*שם עסקה הוא שדה חובה";
        if (!text.match(textPattern)) errors.validText = "*שם עסקה, הטקסט חייב להיות בשפה העברית";
        if (amount===0) errors.amountRequired = "*סכום הוא שדה חובה";
        if(amount.length>8) errors.validAmount = "*אנא הכנס סכום עד שמונה ספרות";
        setErrors(errors);
        return Object.keys(errors).length === 0
    },[text, amount]);
    const handleChange = e =>{
        const {name,value} = e.target
        name==="text"?
        setText(value)
        :setAmount(value)
    }
    const onSubmit = e => {
        e.preventDefault();
       if(!fieldIsValid()) return
        const newTransaction = {
            id:Math.floor(Math.random()*1000000),
            text,
            amount:+amount,
            currency
        }
        addTransaction(newTransaction);
        setAmount(0)
        setText('')
    }
    return (
        <>
            <h3>הוסף עסקה חדשה </h3>
            <form onSubmit={onSubmit}>
                <TextInput text={text} handleChange={handleChange} validText={errors.validText}textRequired={errors.textRequired}/>
                <AmountInput amount={amount} handleChange={handleChange} validAmount={errors.validAmount}amountRequired={errors.amountRequired}/>
                <button className="btn" type="submit" >הוסף עסקה</button>
            </form>

        </>
    )
})
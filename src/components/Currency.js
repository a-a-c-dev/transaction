import React,{useEffect,useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export  const Currency =React.memo(() => {
    const [selectionValue,setSelectionValue] = useState('₪')
    const { changeCurrency } = useContext(GlobalContext);
    const handleSelectChange = event => {
        const {  value } = event.target;
        setSelectionValue(value);
    };
    useEffect(()=>{
        changeCurrency(selectionValue);
    },[selectionValue])
    return (               
        <div className="currency-container"> 
            <label htmlFor="currency-choice">בחר מטבע:</label>
            <select  id="currency-list" defaultValue="₪" onChange={handleSelectChange}>
                <option value="$">$</option>
                <option  value="₪">₪</option>
                <option value="€">€</option>
            </select>
        </div>
    )
})
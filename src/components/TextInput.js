import React from 'react';

export const TextInput = ({text, validText, textRequired, handleChange})=>{
    return(
        <div>
            <label htmlFor="text">שם עסקה</label>
            <input type="text" name="text" value={text} onChange={handleChange}   placeholder="שם עסקה..."/>
            {textRequired?(<p className="error">{textRequired}</p>):validText?(<p className="error">{validText}</p>):null}
        </div>
    )

}
